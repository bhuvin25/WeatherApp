import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { Alert, Text } from "react-native";
import useNetworkCheck from "../src/hooks/useNetworkCheck";
import NetInfo from "@react-native-community/netinfo";

// Mock NetInfo
jest.mock("@react-native-community/netinfo", () => ({
  addEventListener: jest.fn(),
  fetch: jest.fn(),
}));

// Mock Alert
jest.spyOn(Alert, "alert").mockImplementation(() => {});

// Test Component to use the hook
const TestComponent = () => {
  const isConnected = useNetworkCheck();
  return <Text testID="network-status">{isConnected ? "Online" : "Offline"}</Text>;
};

describe("useNetworkCheck Hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display 'Online' when internet is connected", async () => {
    NetInfo.addEventListener.mockImplementationOnce((callback) => {
      callback({ isConnected: true });
      return jest.fn();
    });

    const { getByTestId } = render(<TestComponent />);
    await waitFor(() => expect(getByTestId("network-status").props.children).toBe("Online"));
  });

  it("should display 'Offline' and trigger alert when internet is disconnected", async () => {
    NetInfo.addEventListener.mockImplementationOnce((callback) => {
      callback({ isConnected: false });
      return jest.fn();
    });

    const { getByTestId } = render(<TestComponent />);
    
    await waitFor(() => {
      expect(getByTestId("network-status").props.children).toBe("Offline");
      expect(Alert.alert).toHaveBeenCalledWith("No Internet", "Please check your connection.");
    });
  });
});
