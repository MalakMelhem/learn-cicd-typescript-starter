import { describe, expect, test } from "vitest";
import {getAPIKey} from "../api/auth.js";
import { IncomingHttpHeaders } from "http";


describe("getAPIKey", () => {
  test("should return the API key if it exist", () => {
    const headers:IncomingHttpHeaders = {
    authorization: "ApiKey 12345",
    }
    const key=getAPIKey(headers);
    expect(key).toBe("12345");
  });

  test("should return undefined if API key is missing", () => {
    const headers:IncomingHttpHeaders = {
    }
    const key=getAPIKey(headers);
    expect(key).toBeNull();
  });
    test("returns null if ApiKey has no value", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey",
    };
    const key = getAPIKey(headers);
    expect(key).toBeNull();
  });
});