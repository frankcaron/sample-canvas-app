# Sample Canvas App

This small sample Heroku app has been created to demonstrate the power of using Salesforce Canvas for integrating an external web application into a Salesforce app running on the Lightning Platform.

In this generic example, the small Heroku-hosted app actually does something super cheeky but also super useful when setting up a functional demo. Rather than relying on a whole bunch of custom code to represent the "app", this particular app loads a full-page screenshot. In addition, it displays a small banner above the picture with details from the Salesforce account accessing the canvas.

The idea here is to show how a very specific existing portal or app could be loaded in and how Salesforce Canvas allows you to pass details from the Salesforce Canvas embedded context to the app, while showing the folks being demo'd to a specific app they care about but without having to do all the work to rebuild their specific app from scratch.

Blah. I know that's a terrible explanation, but I'm tired and debugging took a long time, haha. I'll fix it at somepoint.

# Prereqs

In order to use this app, you'll need to ensure that you have...

* A Salesforce org with a Connected App setup for your app
* A Lightning Component created in that org to embed the Canvas app in
* A Heroku account or some other app platform to deploy this app on

# Setup

## Configure Salesforce

First, you'll need to create a Connected App inside of Salesforce. When you're setting up your connected app, be sure to enable OAuth. The endpoint for auth is `https://yourapp.herokuapp.com/canvas-demo/`. You'll need the Consumer Secret that is generated after your connected app is provisioned. 

## Configure your Heroku app

You will need the following environment variables defined in Heroku or your app platform of choice:

* CANVAS_CONSUMER_SECRET -> The consumer secret defined when setting up a Connected App inside of Salesforce
* IMAGE_URL -> The full public URL path to the image you want to load up as your "example" website.

You'll also need to change the Javascript file in the view `index.ejs` to your Canvas JS file. More information can be found [here](https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_referencing_sdk.html).

## Set Up Your Aura Component

The code for the Aura component is super simple:

```
<aura:component implements="force:appHostable,forceCommunity:availableForAllPageTypes,flexipage:availableForAllPageTypes" access="global">  
    <force:canvasApp width="100%" maxWidth="infinite" height="700px" maxHeight="infinite"
                        developerName="your-api-name-for-connected-app-here"/>
</aura:component>
```

Create the component and deploy it on the desired page. The above will work both inside the Salesforce platform and in a Lightning Community.

# One-Click Deploy

You know how we do.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# Etc.

Created with love by Frank Caron.
