28.07.22
=> now that the toggling mode works, I need to start styling my page, and keep writing content

22.06.22
Trying again to implement the toggle for themes
=> made it work, now needs to be stylized

---

17.06.22

Goal is to implement the night/day toggle
=> learn more about useState and useMemo

=> I've created both individual themes and one theme including both dark and light themes, but it's not clear yet what is the path I should be using in order to implement my toggle + have customised dark and light themes.

I'll keep digging

---

15.07
I kept away from building my portfolio for a few days in order to focus on building a NFT project with someone who contacted me.

I'll be spending a few hours and try to move forward.
The two tasks that I give myself are

- implementing the night/day toggle
- re-build the page on what I also spend my time doing

NOTE

## interesting code to implement:

<ClickAwayListener onClickAway={handleClickAway}>
  <Box sx={{ position: 'relative' }}>
    <button type="button" onClick={handleClick}>
      Open menu dropdown
    </button>
    {open ? (
      <Box sx={styles}>
        Click me, I will stay visible until you click outside.
      </Box>
    ) : null}
  </Box>
</ClickAwayListener>

06.07.22

I need to figure out why the themes are not being displayed.

=> found it, in the V5 version, theming needs to import CssBaseline. Now my purplish theme is applied.

On to creating a toggle light/dark mode

04.07.22

Mindmapping my project helped me figure out the weaknesses and what still needs to be done.

My next objective is understanding theming and implementing both night/day themes adapted from a few sources, mostly d-cide.me

I've followed the docs and tutorials on how to create and import a customized theme.
Yet I can't make it to display the theme I've created

This would seem to be the next step : https://mui.com/material-ui/customization/dark-mode/
but I first need to figure out how to apply one theme and really make it work.

I've tried updating MUI, deleting node_modules, deleting mui and reinstalling it, my theme still does not appear. There's just no reason for it not to, and yet...
