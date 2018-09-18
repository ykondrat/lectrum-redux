import * as actions from "../actions";

describe("ui actions tests:", () => {
  test("startFetching test", () => {
    expect(actions.startFetching()).toMatchSnapshot();
  });
  test("setOnlineState test", () => {
    expect(actions.setOnlineState()).toMatchSnapshot();
  });
  test("setOfflineState test", () => {
    expect(actions.setOfflineState()).toMatchSnapshot();
  });
  test("stopFetching test", () => {
    expect(actions.stopFetching()).toMatchInlineSnapshot(`
Object {
  "type": "STOP_FETCHING",
}
`);
  });
});
