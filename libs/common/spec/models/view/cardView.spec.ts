import { CardView } from "@bitwarden/common/models/view/cardView";

const testValues = {
  cardholderName: "my cardholder name",
  expMonth: "08",
  expYear: "2030",
  code: "123",
  brand: "ExampleCard Co",
  number: "1234 5678 9101",
};

describe("CardView", () => {
  it("toJSON creates object for serialization", () => {
    const card = new CardView();
    Object.assign(card, testValues);

    const actual = card.toJSON();

    expect(actual).toEqual(testValues);
  });

  it("fromJSON hydrates new view object", () => {
    const actual = CardView.fromJSON(testValues);

    const expected = new CardView();
    Object.assign(expected, testValues);

    expect(actual).toEqual(expected);
  });
});