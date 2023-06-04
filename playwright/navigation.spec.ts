// import { expect, test } from '@playwright/test';

// const products = [
//   {
//     id: 1,
//     name: 'Fantasia Blend',
//     text1:
//       'Immerse yourself in a fantastical journey with this whimsical blend.',
//     text2:
//       'Discover a harmonious combination of smooth flavors, dancing with hints of chocolate and caramel.',
//     text3: 'Creating a truly magical coffee experience.',

//     type: 'bean',
//     price: 45,
//   },
//   {
//     id: 2,
//     name: 'Dream Bean Delight',
//     text1:
//       'Awaken your senses with this delightful blend that transcends reality.',
//     text2:
//       'Experience a heavenly fusion of velvety textures, nutty undertones, and a hint of vanilla.',
//     text3: 'Transforming your coffee dreams into a blissful reality.',
//     type: 'bean',
//     price: 78,
//   },
//   {
//     id: 3,
//     name: 'Enchanted Roast',
//     text1: 'Indulge in the enchantment of this captivating roast.',
//     text2:
//       "With every sip, you'll be spellbound by its deep, robust flavors, accented by dark chocolate and a touch of smokiness.",
//     text3: 'Leaving you under its bewitching charm.',
//     type: 'bean',
//     price: 37,
//   },
//   {
//     id: 4,
//     name: 'Mythic Mornings',
//     text1: 'Begin your day with a mythical awakening.',
//     text2:
//       'This invigorating blend combines vibrant notes of citrus and berries, harmonizing with a subtle sweetness and a smooth finish.',
//     text3: 'Ensuring every morning feels like an epic adventure.',
//     type: 'bean',
//     price: 68,
//   },
//   {
//     id: 5,
//     name: 'SwiftCup Supreme',
//     text1: 'Experience instant coffee perfection with SwiftCup Supreme.',
//     text2: 'This premium blend offers a smooth and robust flavor profile.',
//     text3:
//       'Ensuring a quick and satisfying coffee experience without compromising on quality.',
//     type: 'instant',
//     price: 27,
//   },
//   {
//     id: 6,
//     name: 'QuickMorn Magic',
//     text1:
//       'Start your mornings with QuickMorn Magic, the ultimate instant coffee companion.',
//     text2:
//       'This enchanting blend combines the perfect balance of boldness and smoothness.',
//     text3: 'Providing a magical awakening to kickstart your day.',
//     type: 'instant',
//     price: 56,
//   },
//   {
//     id: 7,
//     name: 'FlashBrew Elixir',
//     text1: 'Experience the power of instant coffee with FlashBrew Elixir.',
//     text2:
//       'This unique blend captivates with its lightning-fast preparation and extraordinary taste.',
//     text3:
//       'Enjoy a bold and invigorating coffee experience that energizes you in an instant.',
//     type: 'instant',
//     price: 56,
//   },
//   {
//     id: 8,
//     name: 'InstaRoast Delight',
//     text1: 'Indulge in the convenience of InstaRoast Delight.',
//     text2:
//       'This instant coffee delights your taste buds with a rich and aromatic brew.',
//     text3:
//       'Delivering a balanced blend of flavors that will make every sip a moment of pure pleasure.',
//     type: 'instant',
//     price: 56,
//   },
//   {
//     id: 9,
//     name: 'JavaPod Bliss',
//     text1: 'Indulge in a moment of pure bliss with JavaPod.',
//     text2:
//       'Each capsule contains a harmonious blend of meticulously selected coffee beans.',
//     text3:
//       'Delivering a velvety smooth and rich espresso that will transport your taste buds to a state of pure delight.',
//     type: 'capsules',
//     price: 41,
//   },
//   {
//     id: 10,
//     name: 'CapsuBrew Delight',
//     text1: 'Unlock a world of delightful flavors with CapsuBrew.',
//     text2: 'These innovative coffee capsules offer a symphony of tastes.',
//     text3:
//       'Ranging from subtle notes of caramel to hints of exotic spices, creating an extraordinary coffee experience that will leave you craving more.',
//     type: 'capsules',
//     price: 18,
//   },
//   {
//     id: 11,
//     name: 'AromaCaps Encore',
//     text1: 'Immerse yourself in a captivating coffee symphony with AromaCaps.',
//     text2:
//       'These carefully crafted capsules release an irresistible aroma that fills the air as they brew.',
//     text3:
//       'leading to a captivating cup of coffee that combines depth, richness, and an exquisite aftertaste.',
//     type: 'capsules',
//     price: 36,
//   },
//   {
//     id: 12,
//     name: 'BrewClique Euphoria',
//     text1:
//       'Join the exclusive BrewClique and discover a euphoric coffee experience.',
//     text2:
//       'Each capsule is a work of art, blending premium coffee beans from around the world to create a sublime espresso with a velvety texture.',
//     text3:
//       'Complex flavors, and an enchanting aroma that will leave you in a state of pure bliss.',

//     type: 'capsules',
//     price: 24,
//   },
// ];

// test('navigation test', async ({ page }) => {
//   // Open webpage
//   await page.goto('http://localhost:3000/');

//   // Expect a h1
//   await expect(
//     page.getByRole('heading', { name: 'Enjoy Your Moment With Coffee.' }),
//   ).toBeVisible();

//   // Expect a Logo Name
//   await expect(page.getByRole('link', { name: 'Cofeez' })).toBeVisible();

//   // Expect a Home Page
//   await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();

//   // Expect a Products Page
//   await expect(page.getByRole('link', { name: 'Products' })).toBeVisible();

//   // Expect a Button AboutUs
//   // await expect(page.getByRole('link', { name: 'About Us' })).toBeVisible();

//   // Expect a Button Products and go to products
//   await page.getByRole('link', { name: 'Go To Product' }).click();
//   await expect(page).toHaveURL('http://localhost:3000/products');

//   // Expect 12 imgs of the products
//   await expect(page.locator('[data-test-id^="product-"] >> img')).toHaveCount(
//     12,
//   );

//   // Click on the first product
//   await page
//     .getByTestId('product-13')
//     .getByRole('link', { name: 'Fantasia Blend' })
//     .click();
//   await expect(page).toHaveURL('http://localhost:3000/products/13');

//   // Expect an image
//   await expect(page.getByRole('img', { name: 'productName' })).toBeVisible();

//   // Expect a h3
//   await expect(
//     page.getByRole('heading', { name: 'Fantasia Blend' }),
//   ).toBeVisible();

//   // Expect a type
//   await expect(page.getByText('bean', { exact: true }).first()).toBeVisible();

//   // Expect a text1
//   await expect(
//     page.getByText(
//       'Immerse yourself in a fantastical journey with this whimsical blend.',
//     ),
//   ).toBeVisible();

//   // Expect a text2
//   await expect(
//     page.getByText(
//       'Discover a harmonious combination of smooth flavors, dancing with hints of choco',
//     ),
//   ).toBeVisible();

//   // // Expect a text3
//   await expect(
//     page.getByText('Creating a truly magical coffee experience.'),
//   ).toBeVisible();

//   // Expect a price
//   await expect(
//     page.getByTestId('product-price').getByText('45 EUR'),
//   ).toBeVisible();

//   // Expect an input
//   await expect(page.getByTestId('product-quantity')).toBeVisible();

//   // Expect a button
//   await expect(page.getByTestId('product-add-to-cart')).toBeVisible();

//   // // Expect a h3
//   // await expect(
//   //   page.getByRole('heading', { name: 'You may also like' }),
//   // ).toBeVisible();

//   // Click on link "shopping cart"
//   await page.getByTestId('cart-link').click();
//   await expect(page).toHaveURL('http://localhost:3000/card');

//   // Expect a sum
//   await page.getByTestId('cart-total').getByText('45');

//   // Expect a button checkout
//   await page.getByTestId('cart-checkout').click();
//   await expect(page).toHaveURL('http://localhost:3000/checkout');

//   // Check checkout form
//   await expect(page.getByTestId('checkout-first-name')).toBeVisible();
//   await page.getByTestId('checkout-first-name').fill('first name');

//   await expect(page.getByTestId('checkout-last-name')).toBeVisible();
//   await page.getByTestId('checkout-last-name').fill('last name');

//   await expect(page.getByTestId('checkout-email')).toBeVisible();
//   await page.getByTestId('checkout-email').fill('email');

//   await expect(page.getByTestId('checkout-address')).toBeVisible();
//   await page.getByTestId('checkout-address').fill('address');

//   await expect(page.getByTestId('checkout-city')).toBeVisible();
//   await page.getByTestId('checkout-city').fill('city');

//   await expect(page.getByTestId('checkout-postal-code')).toBeVisible();
//   await page.getByTestId('checkout-postal-code').fill('postal');

//   await expect(page.getByTestId('checkout-country')).toBeVisible();
//   await page.getByTestId('checkout-country').fill('country');

//   await expect(page.getByTestId('checkout-credit-card')).toBeVisible();
//   await page.getByTestId('checkout-credit-card').fill('credit');

//   await expect(page.getByTestId('checkout-expiration-date')).toBeVisible();
//   await page.getByTestId('checkout-expiration-date').fill('date');

//   await expect(page.getByTestId('checkout-security-code')).toBeVisible();
//   await page.getByTestId('checkout-security-code').fill('code');

//   // // Expect a checkout Button
//   await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();
//   await page.getByTestId('checkout-confirm-order').click();
//   await expect(page).toHaveURL('http://localhost:3000/thank');
// });
