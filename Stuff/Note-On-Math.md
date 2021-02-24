---
title:
- Note On \LaTeX Math Syntax
author:
- Lewis Britton
---

# Basic Centred Equation

$$\mathrm{\sigma_P^2=w_x^2\sigma_x^2+w_y^2\sigma_y^2+2w_xw_ycov_{x,y}}$$

# Using Full Math Function for Notes

$$\mathrm{\sigma_P^2}=\textrm{Variance of Portfolio}$$ $$\mathrm{w_i}=\textrm{Weight of Asset i}$$ $$\mathrm{\sigma_i^2}=\textrm{Variance of Asset i}$$ $$\mathrm{cov_{x,y}}=\textrm{Covariance of Assets x and y}$$

* Use double \$
* Leave double gap
* Write on one line
* Note: must use text within the math equation or else it will appear on a new line 
* Note: the easiest way to do this is to use the same \$\$ function but start a textrm function next to the mathrm one
* Note: You can use a textrm function within the mathrm function, just better syntax above
* Note: if you use another mathrm function instead, as spacing is auto, word-spacing is ignored
* Note: i choose to use 'rm' (Roman) but of course you may opt for 'it' (Italic), for example

# Using Semi-Math Function for Notes

$\mathrm{\sigma_P^2}$ = Variance of Portfolio\
$\mathrm{w_i}$ = Weight of Asset i\
$\mathrm{\sigma_i^2}$ = Variance of Asset i\
$\mathrm{cov_{x,y}}$ = Covariance of Assets x and y

* Use single \$
* Use standard convention back-slash at end of each
* Use as many lines as you wish for your notes to appear on
* Note: semi-math function is generally used for in-line math
