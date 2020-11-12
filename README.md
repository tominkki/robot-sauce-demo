# Robot Sauce demo

Simple demo with Robot Framework using SeleniumLibrary.\
Part of course 5G00ET62-3002.

## Setup for linux

* Install virtualenv
  * ```pip install virtualenv```
* Create environment
  * ```virtualenv rf-env```
* Activate environment
  * ```source re-env/bin/activate```
* Install dependencies
  * ``` pip install -r requirements.txt```
* Install webdriver
  * ```webdrivermanager chrome```
  * ```webdrivermanager chrome --linkpath /usr/local/bin```
* Run tests
  * ```robot sauce-demo.robot```
  
