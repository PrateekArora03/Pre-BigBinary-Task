## What are the tradeoffs of client-side rendering vs. server-side rendering?

Before dive into tradeoff b/w client-side render vs server-side render. Let's first see what is client-side and server-side render.

Earlier, we only have one option which was server-side rendering. Server-side rendering means we are sending converted HTML from the server-side for every action and response. So for a user, they need to wait for every single action response from the server.

But now, with the time change. We also find a way to manipulate the content using Javascript DOM. That helps us in client-side rendering basically both having tradeoff from different-different sides. Now, even while switching from one page to another, you don't need a page load. Now using service workers(feature provided by browser), your website can even load when user is not connected to internet.

Server Side Rendering vs Client Side Rendering Loading time:-

1. First page load:- In SSR, the page loading time for the first page is very less because of minimal JavaScript code. In CSR, the page load time for first page is higher than SSR page since JavaScript bundle needs to load first before rendering it on the browser.

2. Consecutive page load:- In SSR, the page loading time for consecutive page would be higher than CSR and there would be a blink while page changes. But in CSR, page loading for next page would be very smooth and a lot faster.

Overall, CSR provides a better experience to users because it is faster and smooth.

Now there is trend of universal web applications, in this we send the server-rendered html page with our JavaScript bundle. So bundle can load while user is viewing the request page. It enhances the user experience.
