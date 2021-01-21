---
title:
- \textsc{AG217 Portfolio Management \& Security Analysis\\ Coursework Summary}
author:
- \textsc{Lewis Britton}
date:
- \textsc{Academic Year 2018/2019}
header-includes:
- \renewcommand{\baselinestretch}{1.25}
- \usepackage{geometry}
- \geometry{
        a4paper,
        total={210mm,297mm},
        tmargin = 40.8mm,
        bmargin = 40.8mm,
        lmargin = 32.6mm,
        rmargin = 32.6mm,
        }
---

\newpage

# Variables

N = Number of Assets\
t = Time 

P = Portfolio\
f = Risk-Free Asset\
m = Market\
i = Asset i

$\mathrm{E(R)_i}$ = Expected Return on asset i\
$\mathrm{w_i}$ = Weight of Asset i\
$\mathrm{(1-w_i)}$ = Weight of Asset k\
$\mathrm{\sigma_i}$ = Std.Dev (Risk) of Asset i\
$\mathrm{\sigma_i^2}$ = Variance (Risk) of Asset i\
$\mathrm{\rho_{i,k}}$ = Correlation of Assets i and k\
$\mathrm{cov_{i,k}}$ = Covariance of Assets i and k\
In = Number of Input Values

$\mathrm{\beta_i}$ = Beta Value of Asset i (Sensitivity of Asset i to Another)\
$\mathrm{\alpha_i}$ = Abnormal Return of Asset i (Residuals' Distance from SML)

$\mathrm{P_t}$ = Price at Time t\
$\mathrm{CF_t}$ = Cash Flow (Or Coupon) at Time t (Final Year of Bond: $\mathrm{CF_t=(CF_t+fv)}$)\
y = Yield to Maturity\
fv = Face Value of Bond\
Y = Current Yield\
$\mathrm{S_{0,t}}$ = Annualised Spot Rate Between Time 0 and Time t\
$\mathrm{\frac{S_{0,t}}{2}}$ = Semi-Annual Spot Rate Between Time 0 and Time t\
$\mathrm{E(S_{t1,t2})}$ = Expected Spot Rate Between Time 1 and Time 2\
$\mathrm{f_{t1,t2}}$ = Forward Rate Between Time 1 and Time 2\
i = Interest Rate (Can = y)\
D = Duration\
$\mathrm{D_A}$ = Modified Duration\
C = Convexity\
$\mathrm{R_u}$ = Unexpected Return

\newpage

# Mean Variance Analysis

## 1 Expected Return 

### 1.1 Two-Asset Portfolio

$$\mathrm{E(R)_P=w_xE(R)_x+w_yE(R)_y}$$

### 1.2 Generalised Infinite-Asset Portfolio

$$\mathrm{E(R)_P=\sum_{i=1}^Nw_iE(R)_i}$$

### 1.3 Two-Asset Portfolio w/ Risk-Free Asset

$$\mathrm{E(R)_P=w_fR_f+w_mE(R)_m}$$

## 2 Variance \& Standard Deviation as Risk Measures

### 2.1 Two-Asset Portfolio

$$\mathrm{\sigma_P^2=w_x^2\sigma_x^2+w_y^2\sigma_y^2+2w_xw_ycov_{x,y}}$$

### 2.2 Risk-Free Asset Portfolio

$$\mathrm{\sigma_P^2=w_m^2\sigma_m^2}$$

$\mathrm{\sigma_f=0}$\
$\mathrm{\therefore cov_{x,y}=0}$

### 2.3 Using the 1/N Strategy

$$\mathrm{\sigma_P^2=\left(\frac{1}{N}\right)\sigma^2+\left(\frac{N-1}{N}\right)cov}$$

## 3 Correlation \& Covariance

### 3.1 Correlation 

$$\mathrm{\rho_{x,y}=\frac{cov_{x,y}}{\sigma_x\sigma_y}}$$

### 3.2 Covariance

$$\mathrm{cov_{x,y}=\sigma_x\sigma_y\rho_{x,y}}$$

Where:\
$\mathrm{\rho=1}$: Perfect Positive Correlation (Together)\
$\mathrm{\rho=-1}$: Perfect Negative Correlaiton (Apart)\
$\mathrm{\rho=0}$: No Correlation

## 4 Optimal Weights in 0-Risk \& Perfect Negative Correlation

Perfect Negative Correlation: $\mathrm{\rho=-1}$\
Yields a 0-Risk Portfolio: $\mathrm{\sigma_P^2=0}$

$$\mathrm{w_x=\frac{\sigma_y}{\sigma_x+\sigma_y}}$$

$$\mathrm{w_y=\frac{\sigma_x}{\sigma_x+\sigma_y}}$$

## 5 Inputs

### 5.1 Variance

$$\mathrm{In_{\sigma_i^2}=N}$$

### 5.2 Covariance

$$\mathrm{In_{cov}=N\left(\frac{N-1}{2}\right)}$$

\newpage

# Asset Pricing 

## 1 Abnormal Return 

$$\mathrm{\alpha_P=R_P-E(R)_P}$$

## 2 Expected Return

### 2.1 Recall the $\mathrm{\textbf{R}_\textbf{f}}$ Tangent to the Efficient Frontier 

$$\mathrm{E(R)_P=R_f+\sigma_P\left(\frac{E(R)_m-R_f}{\sigma_m}\right)}$$

### 2.2 Capital Market Line (CML)

$$\mathrm{E(R)_P=R_f+w_m\left(E(R)_m-R_f\right)}$$

### 2.3 Security Market Line (SML)

$$\mathrm{E(R)_i=R_f+\beta_i\left(E(R)_m-R_f\right)}$$

Where:\
$\mathrm{\left(E(R)_m-R_f\right)}$ = Market Risk Premium\
$\mathrm{\beta=1}$: Tracking Market Folio\
$\mathrm{\beta\neq 1}$: Actively Investing\
$\mathrm{\beta>1}$: Aggressively Investing (Expect Market Folio Increase)\
$\mathrm{\beta<1}$: Defensively Investing (Expect Market Folio Decrease)

## 3 Beta Values

### Assets

$$\mathrm{\beta_i=\frac{cov_{i,m}}{\sigma_m^2}}$$

### Portfolios

$$\mathrm{\beta_P=\sum_{i=1}^N w_i\beta_i}$$

\newpage

# Bond Pricing 

## 1 Price

$$\mathrm{P_0=\sum_{t=1}^N\frac{CF_t}{(1+y)^t}}$$

## 2 Current 

$$\mathrm{Y=\frac{CF}{P_0}}$$

## 3 Yield to Maturity 

\begin{center}
\textbf{Step 1}\

Find upper and lower limites of P varying by y\

\textbf{Step 2}\

Conclude 1\% $\Delta$Y gives: $\mathrm{(P_{upper}-P_{lower})=\Delta P_{1\%\Delta y}}$\

\textbf{Step 3}\

$\mathrm{\Delta y_{req}=\frac{P_{upper}-P_0}{\Delta P_{1\%\Delta y}}}$\

\textbf{Step 4}\

Convert $\mathrm{y_{upper}}$ to \% and add $(+)$ number from Step 3

\end{center}

## 4 Spot Rates 

### 4.1 Price of Bond Using Spot Rates

$$\mathrm{P_0=\frac{CF}{\left(1+\frac{S_{0,t}}{2}\right)^t}}$$

### 4.2 Spot Rates

$$\mathrm{S_{0,t}=2\left(\left(\frac{CF}{P_0}\right)^{\frac{1}{t}}-1\right)}$$

Where:\
Spot rates are semi-annual (e.g. 1 period ($\mathrm{t=1}$) means 6 months)

### 4.3 Expected Spot Rates 

$$\mathrm{E(S)_{t1,t2}=2\left(\frac{\left(1+\frac{S_{0,t2}}{2}\right)^{t2}}{\left(1+\frac{S_{0,t1}}{2}\right)^{t1}}-1\right)}$$

### 4.4 Forward Rates

$$\mathrm{E(S)_{t1,t2}=f_{t1,t2}}$$

## 5 Duration of Bond

### 5.1 Basic Duration 

$$\mathrm{D=\frac{\sum t\left(\frac{CF_t}{(1+i)^t}\right)}{P_0}}$$

### 5.2 Modified Duration

$$\mathrm{D_A=\frac{D}{(1+i)}}$$

Where:\
Duration (years) captures sensitivity of a bond to $\Delta$i

## 6 Convexity of Bond

$$\mathrm{C=\frac{1}{2}\left(\frac{\sum t(t+1)\left(\frac{CF_t}{(1+i)^t}\right)}{P_0}\right)}$$

## 7 Unexpected Return 

### 7.1 With Duration 

$$\mathrm{R_u=-D_A\Delta i}$$

### 7.2 With Duration \& Convexity

$$\mathrm{R_{uw/C}=-D_A\Delta i+C(\Delta i)^2}$$

Where:\
Unexpected return is represented as a percentage (\%)

















