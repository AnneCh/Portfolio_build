07.06.22

I wanted to focus on react-router today and finding how to finally implement links that work. But I'm still hesitating way too much, I'm finally accepting the flaw of thinking that I've made, which is to not have read the entire documentation from react and material UI.
Instead, I've focused on trying to fix each problem as they came and learning through tutorials only.

Time to go back to the books.

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

29.05.22

Been too long since I coded, I felt I needed a refresh on what I've done so far, make sure I don't forget how to do things.
I started reviewing my portfolio, trying to fix the issues, bringing me back to learning more about javascript => udemy class

15.03.22

As I started a new job/project, I have less time to focus on my portfolio, but fortunately I am also working with ReactJS on the work project, hopefully that will help me develop my online portofolio as well.

I just found out that the theme provider seems to be the issue, something is wrong in the import.
So, Ive tried several options, integrating the theme on Enter, on App, not integrating theme, and evey time, it fails when the theme is implemented, regardless on which document it has been encoded.

My next work session will be about learning Theming and how to use it correctly.

10.03.22

I don't understand why my content isn't displaying, I'm checking with other scripts to see what I'm getting wrong, haven't found out yet what's going on.

---

06.03.22

I tried another couple of things, and found out that I can use the <a href> with some of the material ui components, even though the routin isn't working, it isn't going to the MainDev page.
I still can't display my Enter elements directly through App.

Right now nothing is displaying, as I kept App on display <Enter />

---

05.03.22

I've been focusing on making links work. It really shouldn't be that complicated, and yet.
I really want to make them work through the way that has been designed to do so, but it seems nearly impossible. There's a button clickable, but even though I'm following all the steps from the import of the react-router-dom to <Switch> and creating the relevant pages.

I'll keep trying out ways, as I can't believe that I would have to create a specific component (new code) just to have two links displayed.
Or, I use this excuse to create the image slider, but I'm afraid that will take quite a lot of time, which I don't have, I need this portfolio working asap.

I've tried several things, included building a new component called Enter, which takes the entire display.
Integrated Link, BrowserRouter and Switch, but still not working, now the buttons don't even show anymore

---

01.03.22

Understanding `props`, how to use them.
PROPS

In React.js, the interaction between components may require to pass an element from one component to another.

That;s when Props come along.
Props are basically attributes which we can name however we want, the convention being to name them ‘props’
example, with our `greet.js` component, yhe props would be added like this:

```
	const greet = props => {
return <h1> Hello {props.name} </h1>
	<h2> How are you  this{props.today}
}
```

and in our app.js:

```
class App extends Components {
	render(){
	return(
		<div className=”App”>
			<greet name=”Bruce”/>
			<greet today=”Monday”/>
			<greet name=”Anna”/>
		</div>
	);
	}
```

That works if we know exactly what are the props that are going to be passed.
If we don’t know, we can use props.children (?????) =>need more research on children

---- props are immutable (their value cannot be changed)
, they can only be viewed once they have been passed in

if we have a list of props values to be passed, we can destructure on the way in, and remove the word `props` : function Product({name, price}) instead of function Product(props) and then props.name etc

Props, just like imports, can be nested and reused to provide specific formatting=> but you can only go downwards, a prop can’t be passed from a nested function upwards

props can also be written into a class-based component like this

```
export default class ItemDes extends Component {
	render() {
		const { name, description} = this.props;
		return (
			<div>
				<p>{name}</p>
				<p>
					<i>{description</i>
				</p>
			</div>
		);
	}
}
```

Ok, I understand enough for now, let's see how this can be to my benefit in the future, but right now I need to make the links work.

#### TOGGLE for day/night mode: https://www.youtube.com/watch?v=hQjlM-8C4Ps

If I understand the logic, instead of putting the buttons with links on the `App.js`, I could design a component that is like a mini navbar, but those couple of buttons (or the image slider if I can)
This way, I can customize the button linking to each of my portfolios and make the linking process easier?

---

28.02.22

I feel like I'm moving laterally and not forward.
The design has changed, that's true, but it's not functionning yet.
I still struggle to understand all the intricacies of React and the use of its libraries and addons of all kinds...

## I gotta learn about PROPS and why LINKS are not working

26.02.22

## --- rearrange folders, create archives, clean up my note-full virtual desk.

25.02.22
About React and hooks:

- hooks don't work inside function, only on top of the main function
  they don't work inside nested functuons
  useState, useEffect etc

Trying to unerstand basics of React ===> Need to learn more about

REUSABLE UI ELEMENTS
=> they are javascript functions that accept inputs
=> they describe how a section a the UI should appear and function
=> props are like parameters for functions : arguments passed into React components
we can access the state of an element
the state is like the life cycle of an element, the part of an app that can change, example:
const [age, setAge] = useState(42);
===== `age` is the constant that will be changed, and `setAge` is the function that will change `age`

=> Managed to modify my first page appearance to some extent

=> I'd like to find a way to create some kind of image-slider that would bring the user from
one part of my story to another one (multimedia => entrepreneur => developer), ok, so I guess, 3 images

---

19.02.22
The best and most recent tutorial there seem to be is
https://www.youtube.com/watch?v=bMknfKXIFA8
I'm going to watch it for the next 20mn and move on to finding about the picture not showing, or how to use material ui to integrate pictures and which kinds of parameters I can add to the pictures' container -- see about the use of scrimba and how to make the best out of it
https://scrimba.com/learn/learnreact

==> recommended to be familiar with ES6's syntax
After watching the first 20mn of the tutorial, I feel I could be startin it, it seems to be practical and easy to follow

https://react-portfolio-sigma.vercel.app/about
This one has very interesting visuals and features that I wouldn't mind borrowing (music, animation, social stuff bar)
https://youtu.be/jcohAIaSy2M

## ===== Goal is to get used to react through my project, I'll see how I can integrate tutorials into my project. I'll probably need to start it again from scratch ----------------------------------------------------------------------------

18.02.22
Finally opened the preview on the browser, somehow it does not open the window automatically
I had to write the address down by myself

---

17.02.22
I really want to try to fix this image not showing, today.
I'm trying Paper and Container from material UI, figuring out which works best to
contain an image and if my image is finally going to display.
but now I can't seem to make npm start work in a way that displays my page

the picture still isnt showing though

## I'll spend this session learning more about react, seeing about tutorials ------------------------------------------------------------------------------

14.02.22
Worked on trying to fix the image not displaying
--- Finally I started using the projects/issue tools of github to work on this specific issue of not
being able to visualize the images that I try to import.
Concomitantly, I installed Material UI, tried to import it in the .js documents that my src folders
comprises. I haven't focused enough on understanding how Materail UI really works, I also think I need
to get more familiar, watch tutos on react and learn more javascript in order to fully grasp what benefits and drawbacks working with MUI would bring me.

## --- Also worked a bit more on the reflexive part, where I try to make the reader understand how I think, rather than bombarding them with projects links. --------------------------------------------------------------------------

13.02.22

Changed About section
=> still need to figure out how to make it just a pop up so the visitor chooses between two portfolios
Trying to figure out how to display the project part.
which... doesn't really matter actually, as I'll have to create a different section anyway.
-- removed the google map image
-- modified the what else portion on data.js
==> I want the navabar to direct to three pages about the inside of the whatelse section

I think I'd better get the pop up page thing out of the way first, as it may require me to install some kind of dependecy that I could use later to do what I want to do now.
=====>>>> try to identify all things I want done, and if there are correlations/dependencies/libraries and all that could be used for each => regroup actions/software

--- installed Material UI dependency, but didn't implement it yet
--- problem with displaying imgs
got acquainted with github issue and project settings, finally took the time to do it

---

12.02.22

About the front-end development of my portfolio:

# _What I want is_

- A website(w.) pleasing to look at
- A w. that is simple, user-friendly yet packed with relevant information
  for anyone wondering if to hire me
- A w. that can offer an insight on how I think, rather than how much work I've done
- A proper balance of work experience, what are the values that I follow when I work  
  both alone and in teams

# Structure

- HomePage

  1. One or two 'catchy' sentences that show my character and let the visitor choose between two portfolios: The Developper, or Multimedia (from start ups work to MBM)
  2. Ease of access to social media links and contact (LinkedIn, QuickEmail, GitHub, Twitter)

- A. The Developper

  1. Short on why I chose this area of work
  2. Selection of projects and languages
  3. Selection of tutorials, mentors, resources
  <!-- 3.1 Short Selection of projects? Portfolio-like -->
  4. Short, Medium, Long term projects + Things I want to learn
  5. Links to GitHub, StackOverflow, StackExchange(needed?), LinkedIn

---

- B. Multimedia

  1. What have I done since my degree (short bckgd on what my studies were, include links for more information)
  2. Creation of Mindbridge Media => how it unfolded and where it is now
     Page includes internal links to a page that basically sums up how the covid situation made me
     select different options for my life.
     Page includes links to MindBridge Media YT and FB pages.

# _How_

I have chosen the support of React Js to build my portfolio,
because it's a popular framework used by defi apps developers,
even if it may not be what I want to use on the long term, there's a high chance
that an employer or client wants their project on React.

React is a specific language to learn that I at least want to master the basics of.

# Specifics

** Integrations to search for **
Night/Day Toggle
Pop up for the 2 portfolios options with specific background
=> static page redirecting to 2 different but interconnected projects?

I don't know yet if I want a scroll or a set of static pages interconnected

--- downloaded images that could fit with the principle of my portfolio
--- contacted Oceane for potential collaboration for logo

<!-- Things that are present through the tutorial I'm following and that I'm willing to keep:
        - Navbar
        - -->

In today's session, I've been able to define more precisely what I want my portfolio to be. It won't be an exhibition of projects, but more an insight on how I think, the set of values I could bring to someone's team.
Added more Tools in the data.js
Fixed small bug in display of What Else page
Downloaded some pictures for inspiration
Tried to integrate one of those pictures into my display
-> didn't work, but I'll try again next time
Now I think I reached the stage where I need to watch a few tutorials about React
-> bare minimum for now, otherwise I will dig into a new full on tutorial and won't move forward with this project.

As I'm digging a bit deeper into React, it shows me how I need to get into JavaScript.
----react is owned by Meta----
Started following the React's website's steps
https://reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial

    components are small, isolated pieces used to build a user interface.

May install Material UI, an extension to react.js that will enable more design possibilities
