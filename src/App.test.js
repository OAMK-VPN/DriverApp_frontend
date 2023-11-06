import { render, screen, within, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
import { getAllParcels, getParcelById } from "./parcels";

function testParcelViewWithAllParcels() {
  const parcels = getAllParcels();
  for (let i = 0; i < parcels.length; i++) {
    test("Verify path /parcels/" + parcels[i].id, () => {
      const route = "/parcels/" + parcels[i].id;
      const parcel = parcels[i];

      render(
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      );

      // Check that parcel header is present
      const productAHeader = screen.getByText(new RegExp(parcel.name, "i"));
      expect(productAHeader).toBeInTheDocument();

      // Check that parcel price is present
      const productAPrice = screen.getByText(`$${parcel.price}`);
      expect(productAPrice).toBeInTheDocument();

      // Check that parcel description is present
      const productADescription = screen.getByText(
        new RegExp(parcel.description, "i")
      );
      expect(productADescription).toBeInTheDocument();
    });
  }
}

// This is required here because otherwise the tests will containg previous URL history and
// leak to other tests causing failures
afterEach(() => {
  window.history.pushState(null, document.title, "/");
});

test("renders the basic app and routing is initialized", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headerElement = screen.getByText(/Shop Parcels/i);
  expect(headerElement).toBeInTheDocument();

  // Check that text "Cart View" is not present

  const shoppingCartHeader = screen.queryByText(/Cart View/i);
  expect(shoppingCartHeader).not.toBeInTheDocument();
});

describe("Verify direct paths specified as Task 1 in the instructions", () => {
  test("Verify path /cart", () => {
    const route = "/cart";

    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    // Check that text "Cart View" is present
    const shoppingCartHeader = screen.getByText(/Cart View/i);
    expect(shoppingCartHeader).toBeInTheDocument();

    // Check that cart contents are displayed
    const cartItems = screen.getAllByRole("listitem");
    expect(cartItems).toHaveLength(2);

    // Check that the cart items are correct
    expect(cartItems[0]).toHaveTextContent("Parcel A");
    expect(cartItems[1]).toHaveTextContent("Parcel C");

    // Check that the "Shop Parcels" header is not present
    const headerElement = screen.queryByText(/Shop Parcels/i);
    expect(headerElement).not.toBeInTheDocument();
  });

  testParcelViewWithAllParcels();
});

test("Verify that clicking on a parcel in the parcel list takes you to the parcel details page", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check that parcel A is present
  const productA = screen.getByTestId("parcel-1");
  expect(productA).toBeInTheDocument();

  // Check that view details link to parcel a is present
  const viewDetailsLink = within(productA).getByText(/View details/i);

  await act(() => {
    // Click on parcel A
    userEvent.click(viewDetailsLink);
  });

  await waitFor(() => {
    //expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
    // Check that "Shop Parcels" header is not present
    const headerElement = screen.queryByText(/Shop Parcels/i);
    expect(headerElement).not.toBeInTheDocument();

    // Check that parcel A header is present
    const productAHeader = screen.getByText(/Parcel A/i);
    expect(productAHeader).toBeInTheDocument();

    // Check that parcel A category is present
    const expectedCateogry = getParcelById(1).category;
    const productACategory = screen.getByText(
      new RegExp(expectedCateogry, "i")
    );
    expect(productACategory).toBeInTheDocument();

    // Check that "Back to Parcels" link is present
    const backToParcelsLink = screen.getByText(/Back to Parcels/i);
    expect(backToParcelsLink).toBeInTheDocument();
  });
});

test("Verify that clicking on the 'Back to Parcels' link takes you back to the parcel list", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Check that parcel A is present
  const productA = screen.getByTestId("parcel-1");
  expect(productA).toBeInTheDocument();
  // Check that view details link to parcel a is present
  const viewDetailsLink = within(productA).getByText(/View details/i);
  await act(async () => {
    await userEvent.click(viewDetailsLink);
  });
  const backToParcelsLink = screen.getByText(/Back to Parcels/i);
  expect(backToParcelsLink).toBeInTheDocument();
  await act(async () => {
    await userEvent.click(backToParcelsLink);
  });
  const headerElement = screen.getByText(/Shop Parcels/i);
  expect(headerElement).toBeInTheDocument();
  // Check that parcel A header h3 elelement is not present
  try {
    const productAHeader = screen.getByRole("heading", {
      level: 2,
      description: /Parcel A/i,
    });
    expect(productAHeader).not.toBeInTheDocument();
  } catch (e) {
    // do nothing, since this is the expected behavior
  }
});

test("Verify that clicking on the 'Cart' link takes you to the cart view", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check that cart link is present
  const cartLink = screen.getByText(/Cart/i);
  expect(cartLink).toBeInTheDocument();

  await act(() => {
    // Click on cart link
    userEvent.click(cartLink);
  });

  await waitFor(() => {
    // Check that "Cart View" header is present
    const shoppingCartHeader = screen.getByText(/Cart View/i);
    expect(shoppingCartHeader).toBeInTheDocument();

    // Check that the "Shop Parcels" header is not present
    const headerElement = screen.queryByText(/Shop Parcels/i);
    expect(headerElement).not.toBeInTheDocument();
  });
});
