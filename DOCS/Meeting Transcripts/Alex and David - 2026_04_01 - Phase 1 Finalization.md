# Alex Ovdienko and David - Phase 1 Finalization Meeting

**Date:** April 1, 2026
**Attendees:** Alex Ovdienko (BIT Studios), David (Incorporate123)
**Meeting Type:** Phase 1 Sign-Off & Phase 2 Planning
**Platform:** Google Meet

---

## Action Items

- [ ] @Alex Ovdienko to work on packages as the first assignment in Phase 2 (UX design)
- [ ] @Alex Ovdienko to design a wizard/helper tool to guide customers through state and package selection
- [ ] @Alex Ovdienko to provide structured documentation on how packages will work on the new website
- [ ] @David to provide additional Wyoming content (can reuse Nevada content as starting point)
- [ ] @Alex Ovdienko to update migration map and sitemap documents based on David's redline feedback
- [ ] Schedule follow-up meeting for next Monday at the same time to review packages

---

## Business Model & Service Strategy

- The business has shifted from Nevada-only to primarily Wyoming incorporation, with approximately 70% of clients now in Wyoming due to significantly lower state fees
- Wyoming costs: ~$100/year for corporations, ~$100/year for LLCs
- Nevada costs: ~$700/year for corporations, ~$425/year for LLCs
- Most clients operate virtual businesses that can be incorporated anywhere, making Wyoming the preferred choice
- Nevada incorporation is primarily for clients with actual Nevada business presence or those who prefer Nevada despite higher costs

## Package Structure Discussion

- Core packages: Bronze, Silver, Gold (available for both Nevada and Wyoming)
- Gold package = Silver package + nominee privacy service
- Silver package = Bronze package + virtual office and mail forwarding
- Bronze package = basic company formation and compliance
- Most package features are included, not add-ons; only three true add-ons exist: foreign state filing, domestication, and a few others
- No a la carte services offered -- packages are required because they're more profitable and ensure clients get necessary services
- Special packages exist for California and Florida (Wyoming + foreign registration) due to high client volume from those states

## URL Structure & Content Migration

- Changed "Nevada Incorporation" URLs to "Company Formation" to be more general
- Company formation should cover both Wyoming and Nevada options
- Several pages need updating to be state-agnostic rather than Nevada-specific
- Offshore services to remain on site for credibility but not actively promoted
- Some legacy content to be retired (international shipping, expedited name change fee)

## Website Architecture: Pillar Strategy

- Pillars serve as content hubs/portals for major service areas
- Main pillars: Company Formation, Asset Protection, Compliance
- Each pillar will contain multiple pages and ultimately direct users to packages
- Compliance pillar will emphasize that registered agent, record keeping, and state filings are all included in packages

## Customer Journey & Wizard Concept

- Need to create a wizard/helper tool with key questions to guide customers to the right package
- First question: Business formation or asset protection?
- If business formation: Virtual business or brick-and-mortar?
- If virtual business: Choose Wyoming
- If brick-and-mortar: Which state? Then recommend Wyoming + foreign registration for that state
- If asset protection: Almost always Wyoming
- Challenge: Balancing wizard guidance with direct package browsing for customers who know what they want

## Current Business Process (Post-Purchase)

- Customers place order (no immediate credit card charge anymore)
- Team reviews order and asks clarifying questions
- Invoice issued and paid online via FreshBooks
- After payment: file documents with state, obtain tax ID, collect client information (officers, shareholders, members)
- Prepare and electronically send ~40 pages of documents including bank account opening materials
- Annual renewal: send reminder, invoice, collect signed documents
- All communication happens via email -- no customer portal currently

## Technical Infrastructure & Future Considerations

- Currently use ACT for document mail merging (~500 database fields merged into 40-page documents)
- Customer portal discussed as potential Phase 2+ initiative
- Portal challenges: integration with ACT, login management complexity
- Portal benefits: centralized client management (many clients have 6-7 companies), address updates, better organization

## Shelf Companies

- Shelf companies are a separate product within company formation
- Customers purchase existing company instead of forming new one, then add Bronze/Silver/Gold package

## Phase 1 Completion & Phase 2 Planning

- Phase 1 (architecture, sitemap, migration plan) reviewed and approved pending minor updates
- Phase 2 focus: UX design, with packages as the priority
- Alex will define package structure, pages, sections, and wizard functionality
- Documents will be iterative -- changes welcomed throughout process

## Meeting Logistics

- Brief connection issues occurred mid-meeting but reconnected successfully

---

## Transcript

Hello? Hey, Alex. Let me turn my volume up. Hey, can you hear me? Can you hear me?

Yeah, now I hear you. I'm sorry, I went on long, probably. I heard as I was going west.

No, no, I just got back. I just got back into the office. I was running late. I had an outside meeting this morning and I just got back and I just got online and I was trying to figure out how we did this last time, but I just found your email. The email for the Gmail meeting or whatever.

Google Meet. Okay.

I meant to send you this document. Yeah. I can send it. In the, Telegram chat Okay. I redlined some things that we need to cover. Let's see here. Corporate.

Science. Let's see, redesigned.

Red line, okay. Okay, so I just sent it to you in Telegram. Basically, it's the spreadsheet and I Just highlighted a few things in red that we need to discuss.

Okay. Let me open it. I can share screen I guess. Again. Do you see my screen?

Yeah, that's it. Migration map. So we can start at the very top. Okay. Well, that's the first one. Okay, I think I fixed that. Okay, so Okay, so what I noticed... Um... Well, okay, let's just go by one by one. But for example, Okay, so on the existing site... Right. I haven't done much to it in years. So it started out as Nevada only. Then I just added Wyoming packages and I don't have very much content talking about Wyoming.

So I need to fix that. But. Essentially, All the law in Wyoming is almost exactly the same as Nevada. So there's not going to be a lot of differences and we're going to have to basically filter people, push them into Wyoming unless they have a particular reason. For going to Nevada. It's it's more expensive essentially in Nevada so you get Basically the same thing, but the state fees are... you know, so much more.

Like for a... corporation, the state fees are like, uh, Uh, $700 a year as opposed to like $100 a year for Wyoming. And for an LLC, it's about 425 versus 100. Okay. So it's just substantially more. That's why we started, you know, offering the Wyoming and now we've moved to good I don't know, a good... 70% of our clients over to Wyoming. you know, through the renewal process, we offer them to switch to save money.

Okay. So a lot of things I see, you know. And then on the current website, there is a few pages that are just about incorporation in Nevada. And that should probably just be about general incorporation. And then we talk about Wyoming and Nevada. I'm not sure what your plan was, whether you have like, Wyoming Corporation, Nevada Incorporation, but The content is going to be pretty much the same if we do that or we just kind of talk about it all in one page and then...

Direct them. I don't know really how you want to do that. For example, on this first... edit I've got there right on page on line 26 mhm So in column H there, I've got why not company formation. So that's the general term instead of just formation, company And then... You know, we can just talk generally about Nevada and Wyoming. The other thing is the offshore section. You have a whole section of offshore stuff.

I kind of want to leave the products there just so that, you know, it shows that we're a little bit separated from some of the competition. We are able to offer those services, but I'm not really offering them at the moment. So... I think it's just better to leave them because very few people ask for them. It just gives a bit more credibility to the site to have those services. So we don't need to push offshore services at all.

Except, yeah, sorry.

Technically the nominee service that we offer is An offshore service, and we apply that to all our Nevada and Wyoming entities, but it's not an offshore incorporation or trust or something like that, you know.

I wanted to ask if you leave them, but if somebody will ask for this service, will you be able to provide it?

No, we basically just tell them we're not offering it at this time. Stay. Okay.

Here we can think of how to leave it to Make it not misleading, yeah? So... But okay, I understand. Mm-hmm.

So we don't want a whole bunch of links. to it throughout the text, you know, but we, through the navigation, they should be able to look at it and, and Discover it Because it adds more credibility to us, the fact that we can offer those services, whereas most of our competition does not. And it kind of leads into the offshore nominee service too. Okay. Um. So yeah, so like we have a few pages like that.

First page there is that I marked there. I mean, you have services Nevada Incorporation. So... Like I said, I don't know whether we need a page for Nevada Incorporation and then one for Wyoming, because we don't have a Wyoming Incorporation page. So I don't know how you want to handle that. So we just change that to company formation page or cluster or however you're going to do this.

Yeah, so, but still, These are two separate states and I think that we will have pages, the plan was that we will have pages for both of them. If you say they are very similar, we will see if it's possible to just have similar content but written in different words and they still have different services in different states. That's... Wyoming is more favorable, so we will push probably. We will define what is our main focus and try to push it, but we'll have Nevada.

The same way as you said that offshore adds us credibility or just expands our nets here, so Nevada could do the same, I guess.

Okay, so basically then on the page 26, on line 26 there, you got that URL Nevada Incorporation. And then your plan was to change that to Nevada LLC. I'm not sure why. So that's why I put there, why not company formation? Um, So, I mean, Nevada incorporation would mean a corporation or an LLC, so the URL definitely shouldn't be in Nevada LLC. It could be company formation or Nevada company formation or Wyoming company formation.

Yes, that's fine. We will change.

And then the pillar would be company formation.

Yeah, here I have it labeled like formation, but yeah, it's just for... For this purpose of this table, I can change it easily for company information.

And then I see a lot of these package add-ons like around line 80 through 86. These package add-on in line So like these mail forwarding services and... office services and things are basically included in the packages But you could start with a basic service like the bronze package and then add those things. but then it would probably become more expensive. So I don't know. Right now, they're not really add-ons.

The only thing that's really an add-on is... is a foreign state filing fee And a perhaps a domestication on the website on the add ons. The current website. Let me just get there real quick. The current website, the add-on services is the URL services, add-on services. And there's basically like three services there. Those are essentially add-ons. That would be something you can add on during checkout.

Um, But all these other ones are kind of included in these packages. So for example, you have these standard mail weekly forwarding service. Nevada office. The expedited name change. The expedited name change fee, that's redundant anymore. That could be retired. Line 84. Mm-hmm. That could be retired. So I don't know when you say package add-on inline, I don't know what you mean exactly by that. It says becomes add-on option on package pages.

Yeah, with packages, I'm trying to So that's where it's going to get a little complicated.

For example, the bronze package is just like... the basic company formation and compliance. And then if you add on like a virtual office to that bronze package, it becomes a silver package. Right? So you could have it as an add-on, but then they're basically buying the silver package. So... I don't know how you want to do that. Yeah, so--Do you want them to have the chance to try add on and then a suggestion pops up or something?

You know, opt for the server service instead. I don't know how you want to handle that because they could add a few add-ons there and... Um... The same thing for the nominee service. If they're buying the silver. On a couple of cases, you put the silver as the It's kind of the incorporation page. Let's see. Like, okay, Wyoming Incorporation on line 99. You have that taking you to the Well... That's interesting.

Okay, so on the current URL, you have Wyoming Bronze Incorporation Package, line 99, Wyoming Incorporation Bronze Package. Then the new URL, you have Wyoming Incorporation, and then the new page name, you have Wyoming Silver Package. So that's a little bit... Confusing. And then you say merge into Wyoming sober. I'm not sure. Exactly. I think there's a lack of understanding about those packages. But I don't know, like you say, if you want to start with the bronze, which is the cheapest, and then add services.

What I've done in the past is try to figure out... what they need and then suggest the package and You know, and we start off pushing the gold package and then if they don't need the privacy, we... they go into the silver package and if they don't need the virtual office either, If they're just looking at... you know, compliance only, then it's the bronze package. Or for example, if they... If they're going to form a Wyoming company and then register in California, you generally wouldn't need the virtual office there.

So you would just do the bronze package plus the foreign filing. So... I'm not quite sure how the flow should work, but... I want to give you as much information as possible.

Yeah, thank you.

Naming these URLs is a little difficult, right? When you say Wyoming Incorporation, That should be kind of like Not a Not a package. That should be more like the... like the Like the, excuse me, Like the company formation there, right? It's like goes to the formation pillar and talks about Wyoming. And then from there they get to the packages. So I saw that some of the services page, just services, you have that as packages, is that right?

Yeah. And. Services. Are you using the... The services page, is that getting discontinued? That might be at the bottom. I think the idea was here too. The diet. So I don't know what the plan is with the services. I think right now, I think that's order, right? No, that's compare packages. So... Nevada Incorporation. So what happens when you just do services? Okay, so services page right now. is Basically the Is would basically be the I don't know what that is.

That's like the, it's like kind of like the homepage almost. Yeah. I don't see where you have that... Services. I see offshore services.

So let's just say if you They can't eat.

The current URL services, I'm not seeing that. You have services and a lot of different things, but not services on its own. Yes, the idea was to retire it. I think. To retire the services page?

Yeah, for now I think it is the same as the homepage here and Or should that not be the packages?

Where are the packages going to be listed?

I think in each pillar we will have packages.

In each pillar. Yeah.

But also, so for packages I thought that we will be, I will continue exploring them because I just started and you're right, I have not enough knowledge and understanding for about them but also it was like In my plan it was like second phase. First we just understand the architecture, we understand what we're building as these documents that I sent to you and and to bring more details to packages and I saw it for example, I was also thinking about it from the perspective of how we incorporate it in a new way and The idea was That's it.

Maybe we should do also, in addition to just showing packages, to do some helpers, like wizards, if you know, like to guide people. Because when I was trying to understand packages, I think you are very clear what package... does what and what does it mean? Yeah. For me as a new person, as a probably just a user, a new user, it's hard to understand why Wyoming is better than Nevada, et cetera. So somehow we should have, I guess, guiding like few steps of a wizard and the guide.

Like select your state here, California, Florida. So.

Yeah, so it's just an example of states, but we can also bring more, like why are you selecting, like, select state, why I should select where you are.

Just to be clear, when you say your state, that's confusing because they might be thinking that's the state that they live in. Right. All right.

Yeah, but also the person should understand If, uh...

Maybe just like select company formation state. Then we got to be clear about California and Florida. You're not really... You know, that we are forming a Wyoming company and then registering it in Florida or California, right?

Yeah, and question like, Is it clear for every user what to pick, Wyoming or Nevada? Or it doesn't matter for them? Like there are some reasons why.

For most people, they're not gonna care. Once they realize it's cheaper in Wyoming, they're probably gonna go with Wyoming anyway. Unless they have a real reason, like they actually want to have a physical office in Nevada or they want to you know, open an office in Las Vegas or something, you know, unless there's a specific reason, unless they're doing business in Nevada specifically, Because you got to remember that most clients are running virtual type businesses.

So it doesn't matter where they incorporate as long as it makes sense to them. So for those people, Wyoming would be the number one choice.

So maybe to start with status wrong answer at all, right? Probably we should.

Yeah.

What you need LLC or corporation? Okay.

So to me, To me, you've got to... Okay, so let's go back here. So that's why I put... Company formation. Like, okay, so... The Nevada incorporation page, like, okay. So to me, there's either a company formation or there's asset protection. Either you're gonna be forming a business, to operate a business or You're going to, you're looking to protect assets. I mean, some people mix the two up because they, well, I'm creating a business, but I want to protect my assets too.

Those are really two separate things. But the main focus Are you looking to form aAn operating business Yes. You want to go to the company formation page. and figure out where it's best to do it. Or are you trying to protect assets? Then we have to go into the question of what type of assets you're trying to protect and then get directed to an asset protection package. Yeah. And for most people, it's really important to write up France to find that out.

If they're like, well, I have a house, I want to protect my house, but I'm doing an online business, then, okay, where do you want to start? You want to protect your house first or you want to start with the online business? Most people start with the online business. So then we're back to company formation. And then it's like, what type of business are you forming this? You know, what? you know a quick description or a drop-down menu virtual business they can operate anywhere brick-and-mortar business located in in which state So based on that, you know, because if they say, well...

I have an office in Nevada. I want to operate my business from there. Then they need a Nevada incorporation. If they say, well, I'm in California, but I want to, it's a virtual type business, but I want privacy. then, you know, then they're back to Wyoming. If they're in California, like, well, I've got a manufacturing business. and I want to create a company that's private, then they're in California, so then it's Wyoming plus California registration.

And the same for Florida. But if they're a virtual business, not really operating in that state, in the state where they live, you know, or they could basically operate anywhere in the world, then you're basically choosing Wyoming.

Yeah, so Nevada, for example, will be only for businesses who are located in Nevada and they need to be there.

Yeah, or they've used Nevada companies in the past, they like them, they're comfortable with them, they're not willing to change or look at Wyoming. And to be honest, everyone that has a virtual type compass, that's the number one thing is, How are you going to operate this business? Is it going to be a virtual company that you can operate from anywhere in the world? If yes, choose Wyoming. If no, if you've got some presence in some state or you've got some licensing issue or you're a manufacturing company, which state are you operating in?

And then if they say Ohio, then... Then they need a Wyoming company with an Ohio foreign registration. And if it's just asset protection, then it's pretty much always going to be Wyoming. So the business formation is a little bit complicated because you kind of need to know what kind of a business and where and how they're going to operate it.

Yeah, okay.

So you could have some kind of a little... flow chart, a couple of questions. Like you said, a guide. Yeah. And the first question would be business and then virtual business and And then if not virtual, then we get into the foreign registration. and then Or is it asset protection and that's a whole different thing?

Yeah, and after they answer the questions and we guide them through the choices, one of the final steps will be we will present what we can do for this state and for their request and at this point we can show our packages, correct? Right, yeah. Okay.

However, I do think that there are those people that... Yeah, since they find your website, they just want to go straight to like services or packages to see what you offer. So you should have them on one page or they can just scroll through and see. And then when they see it's rather confusing, there's a lot of stuff, then they maybe will take the time to answer a few questions, you know?

Yeah, and they can go toAh. Probably pillars, right?

Also, because they know what they want, incorporation or asset protection, and they will click on this main page of the pillar, and there we will showcase what's inside and what we are offering for them.

I want a self-protection. Okay, we have... this and but also we can guide you with help of answer a few questions our suggestion. Okay. I think when I tried to dig into the packages and services. It was around the new Five. 50 different options, like different States different packages in the States and Are we going to have it like this also a lot of different variations based on the inputs or we can somehow organize them In a simpler form, make smaller amount of packages or Make it.

No, I mean, the packages are... I think there's... Well... We can't really reduce the amount of packages. But I don't think there's really that many. There's really your bronze, silver, gold, and then it's either... Wyoming or Nevada. And then we just have these two optional places Privacy services in California and Florida. But we can do that for any state, right? So that's the thing. Um. Yeah, I see your point, but It's very difficult to...

I mean, I could reduce the amount of services, but for example, I could eliminate the Californian Corporation and the Florida Corporation and just say Wyoming Corporation plus a foreign registration in California. But... then people have to get... get into their head that It's going to be a Wyoming company with a phone rather than, oh yeah, I'm in California. I want privacy. That's what I want. It seems like a more...

That's why we have those packages because there's a lot of clients that are in California, a lot of clients come from Florida. And the first thing that they see is like, oh, yeah, Florida, that's me.

Privacy, that's what I want. Okay. So that's why we have those packages, but essentially, you know, it's any state, right?

So Wyoming LLC plus an Ohio farm registration is a manufacturing company in Ohio. They can operate in that way. So I don't know if we separate that out or if we get into this question and we're asking them. You know, we don't want to make it too burdensome, right? When they're trying to answer questions, make it too complicated. But at the same time, We do need to know if they want a virtual, if they are running a virtual business or a brick and mortar business.

That should be like your basic first couple of questions. And then from there, You know. Because, you know, I mean, they come to this site, they're probably... And they're not coming here generically, right? Yeah. Just for business incorporation, because... I think there's a lot of other websites that are going to pop up on a search before they get to ours, right? Because for example, there's incorporation companies that incorporate in all 50 states.

Right? And then they say, okay, if you're in Florida, we'll form you a Florida corporation. You're in Ohio, we'll form you an Ohio corporation. We don't do that. Because it's not the best protection. The best protection is to use a Wyoming company and then register as a foreign state. It's a two-step process. It's more complicated, more expensive, but it's better protection. Okay. So I don't know, you'll have to maybe think about it and Maybe come up with some suggestions how you want to handle that.

I mean, I'm flexible and I'm open. I don't want to make it too complicated. At the same time, I want to make it If there's a package someone can latch on to. right away because of the geographic location and their privacy need, I'd like to offer that. Package. But maybe we only offer that after they ask a couple of questions, you know?

For sure I will work on it and show you this wizard and the ideas.

But essentially there's six packages, right?

Bronze, silver, gold for Nevada and for Wyoming. Those are the basic packages. Everything else is all, and there's other things included, the virtual office and mail forwarding, all those things are included in those packages. A few things aren't like the bronze doesn't have much included, doesn't have mail forwarding, things like that.

And this idea of add-ons, you don't want to expand it. You said you have only three add-ons, but for example, if I want to have a bronze package plus something from gold package, one piece of it, Is it feasible for your business to do.

Well, for example, the server package And the gold package are exactly the same except for the gold package includes the nominee service. If you take the nominee out, you're back at silver. So if you're in silver and you want to add privacy, you're in gold. So you can add it on as a purchase. as an add-on, but in reality, if you add it on, it actually costs more because When you separate the packages out, there are actually more.

So if you combine it, like for example, the privacy in the package is like this, it is $325, but if you buy it separately, it's like $550.

Yeah, yeah. So this is my understanding also of the packages. If you buy a package, you save. But is there a case where user like want to shop item by item and he select what he wants, offer long items?

Right, I understand your question. We do not offer, have never offered like a la carte services where people just want to incorporate and add a registered agent service. We don't offer that service at all because Um Okay. It's not profitable and you know, You know, must everybody... can't maintain their own records. They're not getting what they need, right? Ss So for that reason, we don't have a la carte.

We just have add-ons. Okay. And for now you say we have only three So for example, we could eliminate the California private and the Florida private and just have Wyoming, but... We're gonna have to have a landing page for like, Blower there clients that search and they say, my home state is Florida, what do I need? You know?

And then we can offer them the Wyoming plus the Florida registration.

Yeah. It's coming back to the first, one of the first couple of questions we ask is. Are you going to be operating a business? If so, what kind of business and where? Yeah.

Shelf companies, it's also...

Shelf companies, yeah, that's a separate product basically. So the shelf company essentially is in the company formation, right? Because instead of forming a new company, they're just purchasing existing company. And then they have to add to that the bronze, silver, or the gold package.

Okay. So it's just a little more than the company formation.

And I'm I'm flexible we could I mean, I don't know I In the past it's worked just having the packages, but if you separate it all out, It's going to get really complicated and And then people are not going to get what they need. They're going to be ordering pieces and then they're like, oh, I forgot about the mail forwarding or I forgot this.

Yeah, I mean, I think the packages is the way to go. And then we just have to decide.

If they need a foreign state filing, if it's a brick and mortar type business, then we need to look at the phone registration.

Okay.

So, you know, depending on how it goes, we could eliminate the Florida and the California package and just come bring them into the Wyoming plus the state add-on. It's just that we have a lot of clients from California because Nevada is close and we have a lot of the populations of Florida and California are large.

So there's more clients from those two states than anywhere else.

Yeah, okay, I think for me it makes sense to keep them in adjust. Yeah, in this case. And hopefully that when we introduce some helpers.

And then just FYI, this seconds tier state filings right here. under compliance that's part of formation That should be in the formation.

Okay.

I mean, it could be in both. I mean, it is... compliance because every year we have to file those things. But it is included in all of our incorporation packages already.

Yeah, I think at the beginning it was a thought if we should bring compliance pillar as a separate one because a lot of things are related to formation or protection, right?

Yeah, I think it should be separate because there's a lot of... I mean, it's important, right? It's becoming more and more important now. I mean, and that's one of the reasons why the customers choose us because they can just buy a package and not have to worry about all this other stuff. We take care of everything. Every year. They don't have to worry about their compliance. Yeah.

Okay.

So let's look at what else we've got. So it's just some of the URL, you know. Um...

Yeah, I guess.

Okay, so the package add-ons. International shipping, that could be retired. Line 80? That could be retired. We used to ship physical packages. Now it's everything's electronic. Okay. And then, you know, a lot of these package add-ons that you have are actually... They're not really add-ons, they're included in their options. Their options within the packages. Options would be a better use of the word.

For example, if you purchase the gold or the silver package, you have the option to, you know, get a Nevada telephone service.

What does it mean option? It means that they can choose or opt out?

Yeah, they can choose to obtain that or not. So that would be us applying for an actual telephone service with Verizon in the name of the company so that they have a a legitimate telephone number can go in the yellow pages or white pages. And it will cost you more.

It's an option.

It's an added option. You can, I mean, basically, you know, we don't charge for it, but Verizon is going to send you a phone bill every month, right? If you opt for that.

But for just setting up, you will recharge more.

It is Verizon charging. Yes.

And then, um... Obviously, you have to have a virtual office in order to get that phone service. That's only available for the Gold or the Silver package.

And for example, in this example, if I want to have a phone number, should I explicitly say it on the checkout or it will be some later stages where you...

Yeah, later stages, we offer these options and we say, look, you've opted for this. For our service, you know, we offer you these, you know, you need it to provide us with a telephone number for the company. Here are some options. You can go online and order these virtual numbers or we can establish a proper phone service for you in Nevada. Those are kind of your options. Okay.

What is also interesting and I don't rememberBefore you. No. The details, how this process goes in general right now, like after the purchase what happens?

After this purchase, what are the website?

Yeah, so then we have to, well, they're purchasing, they're not actually, they're providing credit card information.

Actually, they're not. We used to do that. We don't anymore. So they place an order. We review the order, make sure that it's correct. If there's any questions, we ask the questions right away. Then we issue an invoice. and then they pay the invoice online. Once we receive payment, we start the actual company formation. And then that means filing the documents with the state, obtaining a tax ID number, And then we send them a list of questions that they need to answer so we can organize that company.

Who's going to be the officers, the shareholders, the members, all these things. And that's done by email. Yo.

And then you work with this client, I don't know, you contact through the phone, through the email. For next year, you send renewal invoices so you can communicate outside of the website.

Yes. Okay, so after we've gotten all the information back, we've answered all the questions, we then can prepare all the documents and we can electronically send them all the documents. include documents to open a bank account, all the information they'll need, everything that they possibly need to operate. And at that point we say, you know, just use these documents to... and go to your bank or open your bank account and then you're all set basically.

We'll be contacting you next year when it's time to renew our services. So then we send them an invoice out, a little reminder notes saying that your service is up for renewal. There's going to be some documents that have to be signed and returned and you have to pay our invoice.

I see, I see. Thank you. There are no plans to create some sort of client portal or something like this?

I say again.

Is there any ideas to create some sort of client portal on the website? Do we need that?

Well, we use FreshBooks currently for our invoicing and processing services. So... We do have... In the past, we had logins for that. We did have documents that we uploaded and things, but it Got too complicated. I did try to build our own That kind of failed. Um. As long as they can look at their invoices and pay them. Even a login is complicated because then they don't have the login, they can't remember the login.

So basically we send the invoices by email, they pay the invoice and they don't really need to bother with a login. Okay. I mean, if we did have a... Login You know, the main problem is our back end is in act, right? So if we got that to a point where. We could do all the mail merging of documents. within some kind of content management system, contact management system Um... then it would be useful.

People could go in and change their address and things like that with their login. It might be useful, but we have to integrate the system that we have with all of our data into that. If we can't do that, that pretty much shuts down the whole portal idea, to be honest. So that's something that we have to crack is the use of of ACT. And the number one reason we use ACT is because of the mail merging of documents.

So we're merging documents Typically when we form a company, We're merging about 40 pages of documents. So we're preparing 40 pages of Word documents and then we're PDFing them. and we're shipping that electronically to the client. We have to be able to do that. with our database. So we merging maybeHundreds of fields, probably Close to 550. fields of data are being merged into these 40 pages. And we do the same on an annual basis also.

Yeah.

After our first meeting I I researched this question. I think there were solutions which can work for us. Uh, It just I think we will work, we will discuss it probably in phase two. So I just didn't want to derail our first phase with update of the website. But after that, or in parallel, we can also think about it. I think there are some solutions which can help us to make it more efficient. And also it could be a step if we, because a lot of things could be good about this portal and client login.

Just how to build it, but it could be efficient and these new tools and how we can transform, how we can go away from act and make it more efficient.

I think there are some options.

Yeah, I mean, because everything is separate now. We have clients that have maybe six or seven companies with us and they have like, it's all separated. None of it's merged, right? So, yeah. So from that perspective, that would make things much more efficient, right? Yeah, yeah. But at the same time, you do have to keep records separate. So like for the XYZ company, we need to know who's the president, treasurer, secretary, director, shareholders.

And then for the next company, it might be different. So we do have to have all these database fields. That's the problem. And there's a lot. There's up to, like you said, up to 500 database fields available. that we use to prepare to basically to prepare these documents and to access the information. Yeah. Okay.

Okay. Yeah, so I think this is feasible.

So right now, I mean, we can have a link, but I'm not even sure, to be honest, if our link even works on the website right now. But we used to have a billing, yeah, a billing link. And that goes through FreshBooks. It's not a customized thing or anything. It used to be all customized with our logo and everything, but that's... they kind of moved away from that. Okay, yeah.

So I think we will return back to the portal after we finalize phase one and it will be discussion about portal and also about how we can improve our ACT process. We'll merge it to something else. Okay, so for packages, so I think that my nextWow. The next phase, the second phase is about UX about designs in later stages and UX is also one of the main things that we should which I should define is this packages I should work on them and then we should work with you and finalize them and understand how they will work on our new website and also this wizard how it will work so within this UX Second phase packages will be my first assignment to go deeper and provide you the structuredUnbelievable.

How we can do that? on the website. But for the second phase, I just want to make sure that The first phase is done and approved. So this report and sitemap and this migration plan with your notes which I will review and I guess approve 99% of times for from my side because you the person who know how it should be done better than me for now so With this update, can we say that the first phase is completed and what you saw in reports and in these documents make sense to you?

And this is our foundation for the second phase and we start building The structure of the site, so we also have this sitemap which is all Also a part of second phase it's like intermediate information architecture and I also have a version of it when I put what sections in each page there will be so I was start to thinking about second phase but what about the first phase? Is it Good.

Look good. Yeah. I mean, yeah. I mean, I just don't... I don't... you know, these, um, The one thing that's hard for me because I don't know what's going to be in these pillars, like I don't exactly know what a pillar is.

I don't think I'm going to...

Hey, I'm not sure what happened.

Yeah, I'm not sure as well. I was there waiting for you to rejoin. It's fine. Okay.

With connection.

Yeah, so about pillars, I guess that in general if you see the structure and In general, if you see that it makes sense and it works for us, what will be inside, we will define exactly on this next phase. I will be showing you what we'll have for each page, what sections, we will discuss it, review it, change it. As well as you change it, for example, here, you suggested change the URL, change the name.

It's totally fine to do it on the first phase, on the second phase, or it's iterated photos.

But, David, sorry to interrupt, but in general, Pillar like kind of like a hub, like, Like compliance is multiple pages or it's just... basically like a little portal for everything to do with compliance with multiple pages and links back and forth.

Yeah, my understanding is that this or a portal where you start and then you can see what's inside it, what packages or what pages or and you can then go deeper to that.

Okay, so for example, like on our compliance, if you're in the compliance portal, You would basically read that Registered agent services are included in all of our packages. Record keeping services are included, which includes annual minutes and things, included in all of our packages. State filings are included in all of our packages. So you could, you know, so basically sign up for one of our packages and we'll take care of everything.

You don't have to worry about anything. What we don't include is tax filings. Right? So. And then Yeah, so I mean, it's fine. I guess we can in the asset protections, same thing. It's going to break things down and move you to different places. But eventually everything is going to come back to the packages, right?

Yeah, in the end I think this is what we want. We just said that we want to educate our customer so there will be this additional infrastructure for education and in the end it will be packages and They understand what, hopefully, what they need, yeah? And they submit with, yeah.

Okay, so yeah, I mean, I say go ahead. I mean, obviously everything's still flexible. We can change and move stuff around. I might have to write more content on Wyoming as we get through this. If you don't have the content on Wyoming, just use Nevada content that's on the website and then I can change that. Yeah, that's a great plan. For sure. Okay.

So then I will start digging into the second phase and start with the packages because it's the most complex and our main focus here and also Probably we'll polish and send you these documents later about what my understanding could be about each page, what we will include in each page, but next call probably we will be talking with you about packages, okay? I understand them and you will be correcting me.

Okay. All right. So you want to schedule that for next Monday then? Or do you need...

Yeah, perfect. That's perfect. Do you want the same time?

Yes, probably a good time.

Yeah, I will book meeting for us then for next Monday.

Okay. Perfect. Thank you much for your time. Okay. All right. Thank you. Thank you. Have a good day. Good afternoon. Okay. You too. Okay. You too. Bye-bye.
