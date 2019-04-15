# Sample Canvas App

This small sample Heroku app has been created to demonstrate the power of using Salesforce Canvas for integrating an external web application into a Salesforce app running on the Lightning Platform.

# Prereqs

In order to use this app, you'll need to ensure that you have...

* A Salesforce org with a Connected App setup for your app
* A Lightning Component created in that org to embed the Canvas app in
* A Heroku account or some other app platform to deploy this app on

# Setup

You will need the following environment variables defined in Heroku or your app platform of choice:

* CANVAS_CONSUMER_SECRET -> The consumer secret defined when setting up a Connected App inside of Salesforce
* IMAGE_URL -> The full public URL path to the image you want to load up as your "example" website.

# Aura Component Setup

The code for the Aura component is super simple:

```
<aura:component implements="force:appHostable,flexipage:availableForAllPageTypes">  
    <force:canvasApp width="100%" maxWidth="infinite" height="700px" maxHeight="infinite"
                        developerName="your-api-name-for-connected-app-here"/>
</aura:component>
```

# Etc.

Created with love by Frank Caron.