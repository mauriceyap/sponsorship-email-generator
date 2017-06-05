# Society Sponsorship Email generator

A **very** simple-to-use tool for your society to use for writing emails to approach companies for sponorship. Use it to generate emails, and speed up the rate of emails sent!

**Pro tips:**
- Set it up and put it online somewhere (<a href="https://www.messenger.com/t/mauriceyap">drop me a message</a> if you don't know how, and I'll be happy to host it or show you how to) and share the link with other committee members so they can all contribute towards finding sponsors.
- Use a tool for tracking which comapnies you will/have contacted and progress. Consider using <a href="http://trello.com">Trello</a>, as it integrates well with <a href="http://slack.com">Slack</a>. Google Sheets can work for this too.

## Getting set up (very suitable for the less technically literate)
**Even a UCL student can follow this**
1. Copy these files onto your computer.

    **What's Git? Isn't that a rude word?** Click on the green *Clone or download* above and download ZIP.

2. Open up `index.html`. See a webpage? Have a play around to see what it actually does:
  - Fill in stuff on the left of the page and see what happens. Change that stuff and see what changes.
  -  Fill in a fake email address in the *Their email:* box. Ignore the warning and click the blue button.
  - Sorry for opening up your Outlook/Mail app if you haven't got that set up yet.

3. Open `index.html` in your favourite text editor.

   **Help! I've never coded anything before!** Install <a href="http://atom.io">Atom</a>, or if you're really, really, really lazy, Windows: Notepad, Mac: TextEdit.

   - Lines 8 and 18, change `MySociety` to whatever.
   - Line 91, change MySociety to whatever.
   - Have a read of the comment on line 52. If you're interested, also read line 23 in `js/generator.js`
   - Save it and refresh your web browser. Title has changed. Magic.

4. Open `js/generator.js` in a text editor
   - Look at lines 39 - 49. This is the email template. Look at what's going on and change it. If you've never used Javascript before, but know Java, C, C++ or C#, it's basically the exact same. Change this to what, save it you want and you're good to go. Refresh the web page to see it work.
   - **I have absolutely no idea what's going on!** It's Javascript. Scroll down for a free crash course, which Imperial would otherwise charge you £9k a year for.

5. You're done now, but you can upload the entire folder to a server to put it online. Zip up the folder and <a href="https://www.messenger.com/t/mauriceyap">drop me a message</a> if you have no idea how to and I'll sort it out for you.

## Thanks Maurice! How do I donate?
You're very welcome! It's fine - no need to donate!\*

\*I like pints of beer.

## Appendix: Crash course on Javascript
This is what we have:
```
var string = "Hi " + $scope.theirName + ",\n\n";
string += "I'm " + $scope.yourName + " and I’m the incoming " + $scope.yourPos + " of Imperial College London’s MySociety. ";
string += "We'd love " + $scope.company + " to sponsor us!\n\n";
string += "You should consider sponsoring us because we're quite good.\n\n";

// Uncomment this if you're using the "we're great for companies in your sectors because..." bit
//string += $scope.getSuitabilityMessage() + "/n/n"''

string += "Here's another reason why we're awesome.\n\n";
string += "I’ve attached our Sponsorship Proposal. I hope that on this occasion, you swipe right!\n\n";
string += "Kind regards,\n" + $scope.yourName;
```

`string` is the variable which holds the text. Other than we first line, we can see it is formed of :

```
string += something + somethingElse + somethingElseElse + ... ;
```

This adds stuff on to the end of `string`. The stuff you can add are:

- strings, which look like `"O hey there! I'm a string.\n"` (note that `\n` ia a new line character)
- the different variables we have from the form:
  - `$scope.yourName`
  - `$scope.yourPos`
  - `$scope.company`
  - `$scope.theirName`
