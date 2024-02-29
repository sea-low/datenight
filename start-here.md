## USER STORY

1. User will be able to have dates randomly selected for when the two people in the couple cannot decide what to do for datenight.
2. User will be able to selected 'out dates', 'in dates', or completely randomly selected.
3. After randomly generated date is selected, it is removed from the pool and cannot be selected again.

### IDEAS FOR HOW TO APPROACH:

> #### OPTION 1 'Good Wash'

> > **Rough structure:**

> > - Two arrays: potentialDates[] with all the dates listed, the other is empty selectedDates[].
> > - There would be a let variable 'x' that would equal 0.
> > - There would be a modifier in the code that would apply the randomized number to be odd or even based on the checkbox.
> > - For random, the modifier would just select randomly from the array, not limited to odd or even numbers.
> > - Odd would be out, even would be in.
> > - There would be a function that would add the randomly selected number from the modifier to 'x'.
> > - There would be a function that would pull a date based on the index 'x' from potentialDates[] and push it into selectedDates[].
> > - The selected date in potentialDates[] will be taken out.
> > - The last date in selectedDates[] would be printed out for the user to see.

> > **Visual**

> > - Header/prompt text ('pick my date' or whatever).
> > - There will be a smaller header or prompt text ('We want to go on a date...').
> > - Below smaller text, there will be three check boxes: 'in', 'out', 'random'.

> > **Potential Problems/Knonwledge to Learn**

> > - Annoying to make sure that index number corresponds to what type of date when adding new dates.
> > - Having to find a way to make sure that the odd dates and even dates correspond to out and in dates could be complicated.

> #### OPTION 2 'Better Wash'

> ###### _the visual would be identical to Option 1_

> > **Rough structure**

> > - Three arrays: goingOut[], stayingIn[], selectedDates[].
> > - The checkbox would determine which array to pull from.
> > - The 'x' would still equal zero.
> > - The randomizer function on what to add to x would be limited based on
> >   the highest index remaining in whichever array is chosen by the checkbox.
> > - The function would pull the index out of the corresponding array and .push() selected date at 'x' index into selectedDates[].
> > - The last item in the array would be printed out for the user to see.

> > **Potential Problems/Knowledge to Learn**

> > - Connecting the checkboxes to the different arrays.
> > - How to do 'random' when there are two arrays (how would it know???).

> #### OPTION 3 'Best Wash'

> ###### _the visual would be identical to Option 1_

> > **Rough structure**

> > - There would be two arrays: potentialDates[] (array of objects that would identify each date as an 'in' or 'out' date)
> >   and selectedDates[] (with the previous dates chosen).
> > - There would be a function that would shuffle the objects within the array.
> > - Based on the check box selected (for odd or even) there would be a selecting function.
> > - It would pull the first object with the corresponding 'in' or 'out' object key.
> > - For random, it would just shuffle and select the first object.
> > - There would be a function to compare the selected object to the previously selected objects to the selectedDates[]
> >   array to make sure that none of the objects in selectedDates[] matches the selected date from potentialDates[].
> > - If the object is unique, it will .push() into selectedDates[].
> > - The last object's value is printed on the screen for the user to see.

> > **Potential Problems/Knowledge to Learn**

> > - How to work with arrays of objects (lol)

> > #### _Nice Features for the future:_

> > - Notification that dates are all used up and give the option to either:
> >   > - Add new dates
> >   > - Reshuffle dates

> > - Potential updooting or downdooting dates and a visual record of that
