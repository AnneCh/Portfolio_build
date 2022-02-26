I've started this project for more than a week now, but I haven't been taking many notes about it
and how to come to make the decisions that I am making.

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

14.02.22
Worked on trying to fix the image not displaying
--- Finally I started using the projects/issue tools of github to work on this specific issue of not
being able to visualize the images that I try to import.
Concomitantly, I installed Material UI, tried to import it in the .js documents that my src folders
comprises. I haven't focused enough on understanding how Materail UI really works, I also think I need
to get more familiar, watch tutos on react and learn more javascript in order to fully grasp what benefits and drawbacks working with MUI would bring me.

--- Also worked a bit more on the reflexive part, where I try to make the reader understand how I think, rather than bombarding them with projects links.

17.02.22
I really want to try to fix this image not showing, today.
I'm trying Paper and Container from material UI, figuring out which works best to 
contain an image and if my image is finally going to display. 
but now I can't seem to make npm start work in a way that displays my page

18.02.22
Finally opened the preview on the browser, somehow it does not open the window automatically
I had to write the address down by myself

the picture still isnt showing though

I'll spend this session learning more about react, seeing about tutorials


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

===== Goal is to get used to react through my project, I'll see how I can integrate tutorials into my project. I'll probably need to start it again from scratch 

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



26.02.22

--- rearrange folders, create archives, clean up my note-full virtual desk.

