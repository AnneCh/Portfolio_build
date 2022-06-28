28.06.22

I've added a few paragraphs to the entrepreneur part, and moved forward with trying to figure out how to implement the language switcher for user.
I fell down the rabbit hole of tutorials and started looking into how to implement a visits' tracker, so to display the number of visits. (google analytics)

24.06.22

Following tutorials on how to integrate i18n in my application.
I think I understand the overall principles, how it works, although I still need to go through the official documentation.

I've started including translations in the public folder and writting the imports necessary in the Enter and Index files.
Added a page about Education, which I had totally forgotten.

Now I can see more clearly how this CV is going to be built, a big part to do will be to build the translation files correctly and include each key in the corresponding component.

Things to do:

- create translation files, fill them with descriptions and titles
  => do it as a pair, one sentence on the English version, one sentence on the French one
  -make sure each element has the proper imports (start with that)
- start defining the translation files with headers, corresponding to components, for clarity
- DO NOT create translation files with placeholder, only with final text. If no final text, leave blank and don't replace on the component, keep the placeholder text until it's replaced

I've spent some time writting more texts and implementing the translation module where needed

22.06.22

Still trtying to figure out why my MainDev and MainMul aren't displaying.

Also thinking of creating a 404page.

I drafted an error page and set it up so that it returns if the page requested is not part of the routes.

I finally understood (thank you free code camp!!) why the main page kept on displaying no matter what link I clickd on, that's because I had included the component in the App.js, when all my MainPage component needs to do, is to be linked to "/".

I still can't display Programmer and Project Management pages but I think I understand where the problem is coming from.
Got it, I do not need any BrowserRouter in the components.

Integration of navbar + use of nested routes

20.06.22

at running `npm start`, eveyrthing compiled properly yet my page is blank.
Found out here the problem was coming from, I had added something from a tutorial that crashed the code.

Now the problem is that MainDev and MainMul aren't loading and sending me to a blank page.
What Else and Contact load under the Home component instead of replacing it.

18.06.22

Taking a day off to return to the Udemy web developper bootcamp 2022 and deepen my knowledge of javascript. Today's lessons will be about Array Callback Methods, that I clearly do not master and that will definitely be useful to build this portfolio and my trading bot (to see the equivalent with Python)

15.06.22

As I was creating the links, more ideas of display and interconnectivity sprung in my head, and I created several Navbar components to create a dedicated navbar per page, for better customisation. I'm getting the hang of the links/router/switch and all, and external links are also working.
But I encountered a problem with one specific navbar that just flat out does not display. Yet no error message is thrown.
I've copied-pasted the exact previous navbar that works well, but somehow it's not working. Each element inside of the navbar is correct, links and placeholders aren't disturbing the code. So it looks like a problem of display, container or something, that I need to explore.

I'll start digging about why each component is still being displayed instead of only rendering the clicked element.

- Dig into Routes, would that fix my problem?
- To create: - Return to previous button: is there an embedded react function that allows that? - Home button to go back to the initial page

  14.06.22

I've finally made the links work! Now that I understand how routing and links work with react, I'll be focusing on making sure everything is interconnected.

Then, I'll work again on the data iteration, as I don't remember how I did that (and it's no longer displaying)

Then, will come the styling.

TODO

- find out how to not display <Enter/> when either of the selection has been made
- implement all the links
- create more components and functions inside the MainDev, MainMul and What Else

  13.06.22

For the past few days, I've been focusing on the react.org/tutorial page, re-creating a tic-tac-toe game.
It is furthering my understanding of props and state, how they differ, how they are being used, mostly it emphasizes the logic used behind the code. The code evolves as the throught of process evolves and we go modifying the code along.
Alongside, I'll start learning Agile as I keep readign about it when it comes to structuring the way of coding like building DevOps projects.

07.06.22

I wanted to focus on react-router today and finding how to finally implement links that work. But I'm still hesitating way too much, I'm finally accepting the flaw of thinking that I've made, which is to not have read the entire documentation from react and material UI.
Instead, I've focused on trying to fix each problem as they came and learning through tutorials only.

Time to go back to the books.
=> I've re-started with the basics of react from the docs, starting with the tutorial on tic-tac-toe, which I'm halfway through.
It's a good refresher of concepts like arrow functions, the difference between state and props, and how each of those options are being used within and betwen react components, how components can 'interact' between on another, between groups, to create a specific render.
It helps me undertand the dynamic in my portfolio, which kinds of functions and objects I'll be able to integrate within my code so to make my site as responsive as possible.

04.06.22

finally got a more detailed understanding about what's going on between routers, routes, links, etc.
Trying to implement that today so my links can finally work

03.06.2022
\*\*recap of the day
Several points I've identified to be worked on, understood through tutorials and applied to the project:

- crashcourse on material ui needed
- gather a few examples of typescript, react, material ui pages, id the similarities and differences, get more inspirations
- better understanding after today, of how components and themes work, how I can use them to create the multipage portfolio I want while learning
- color code almost figured out, and found good ressource to help with designing the theme
- geting more ideas on the content for each page\*\*

Trying to focus on understanding properly how routes, pages, components and links all relate to one another and how I can use them all to build my portfolio
Using mui documentation and tuto videos if needed

Added ideas to implement the functionality of the main page, adding translation plug-ins/apis, personalized greeting by the number of visits

As I compare the structure I've built so far, to other projects on github, I'm asking more questions, I know there's not one good solution and the fun lies in finding out which of all the options is the most acceptable one for me; I need to settle for one strucure and just learn on the ride.

- find way to make a translucide background text

"Generate a theme base on the options received" -=> may be what they use to toggle light to dark theme. I could use that to modify the theme between the CVs

(useful https://bareynol.github.io/mui-theme-creator/)
