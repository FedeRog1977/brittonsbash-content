---
title:
- \textsc{AG215 Business Finance\\ Coursework Summary}
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

# Company Valuation

## 1.1 Capital Asset Pricing Model

$$\mathit{
r=r_f+\beta(r_m-r_f)
}$$

## 1.2 Earnings Per Share

### 1.2.1 Ungeared Company

$$\mathit{
EPS_{UG}=\frac{EBIT(1-T_C)}{N_{UG}}
}$$

$$\mathit{
T_C=\textrm{Corporate Tax}
}$$

### 1.2.2 Geared Company

$$\mathit{
EPS_G=\frac{(EBIT-r_B(B_G))(1-T_C)}{N_G}
}$$

## 1.3 Earnings Yield

$$\mathit{
EY=\frac{EPS}{P_t}
}$$

## 1.4 Rate on Equity

### 1.4.1 Ungeared Company 

$$\mathit{
r_{S(UG)}=\frac{EBIT(1-T_C)}{V_{UG}}
}$$

### 1.4.2 Geared Company

$$\mathit{
r_{S(G)}=\frac{(EBIT-r_B(B_G))(1-T_C)}{S_G}
}$$

### 1.4.3 Equity Company 

$$\mathit{
r_S=\frac{D_1(1+g)}{P_0}+g
}$$

## 1.5 Rate on Debt

$$\mathit{
R_{B(G)}=\frac{(EBIT-r_B(B_G))(1-T_C)}{V_G}
}$$

## 1.6 Value of Company 

### 1.6.1 Geared Company 

$$\mathit{
V_G=S_G+B_G
}$$

### 1.6.2 Ungeared Company

$$\mathit{
V_{UG}=P_0(N_{UG})
}$$

$$\mathit{
\therefore V_G=V_{UG}+B_G(T_C)
}$$

## 1.7 Rate on Weighted Average Cost of Capital

$$\mathit{
r_{WACC}=r_S(\frac{S_G}{B_G})+(r_B(\frac{B_G}{V_G})(1-T_C))
}$$

\newpage

# Working Capital 

## 2.1 Annual Holding Cost 

$$\mathit{
AHC=\frac{1}{2}QC_H
}$$

$$\mathit{C_H=\textrm{Unit Cost to Hold}}$$ $$\mathit{Q=\textrm{Order Quantity}}$$

## 2.2 Annual Order Cost 

$$\mathit{
AOC=\frac{D}{Q}C_0
}$$

$$\mathit{D=\textrm{Demand}}$$ $$\mathit{C_0=\textrm{Unit Cost to Order}}$$ $$\mathit{\therefore TAC=(\frac{1}{2}QC_H)+(\frac{D}{Q}C_0)}$$

## 2.3 Optimal Holding Quantity

$$\mathit{
Q^*=\sqrt{\frac{2DC_0}{C_H}}
}$$

## 2.4 Optimal Holding Period

$$\mathit{
\textrm{Optimal Period}=\frac{Q^*}{\frac{D}{365}}
}$$

## 2.5 Optimal Cash 

$$\mathit{
C^*=\sqrt{\frac{2(ACR)(TC)}{r}}
}$$

$$\mathit{ACR=\textrm{Annual Cash Required}}$$ $$\mathit{TC=\textrm{Transaction Costs}}$$

## 2.6 Optimal Cash Period

$$\mathit{
\textrm{Optimal Period}=\frac{C^*}{\frac{ACR}{365}}
}$$

## 2.7 Optimal Target Cash Balance (All Daily)

$$\mathit{
Z^*=\sqrt{\frac{3(TC)(\sigma^2)}{4r}}+L
}$$

$$\mathit{U^*=\textrm{Optimal Upper Cash Balance}=3Z^*-2L}$$ $$\mathit{U=\textrm{Upper Cash Limit}}$$ $$\mathit{L=\textrm{Lower Cash Limit}}$$ $$\mathit{\sigma^*=\textrm{Variance of CFs}}$$ $$\mathit{r=\sqrt[365]{EAR+1}-1}$$ $$\mathit{\therefore \textrm{Average Cash}=\frac{4Z-L}{3}}$$

\newpage

# Capital Budgeting & Leasing 

## 3.1 Basic Capital Budget

* Initial Costs 
* Maintenance Costs 
* Tax Savings on Maintenance Costs
* Scrap Value 
* Tax Savings on Scrap Value 

### 3.1.1 Tax Saving

$$\mathit{ 
\textrm{Tax Saving}=\textrm{Tax Depreciation}*T_C 
}$$

### 3.1.2 Straight Line Depreciation

$$\mathit{ 
\textrm{Straight Line Tax Depreciation}=\frac{\textrm{Initial Cost}-\textrm{Scrap Value}}{t} 
}$$

### 3.1.3 Equivalent Annual Cost

$$\mathit{ 
EAC=\frac{NPV}{PVAF_{r,n}} 
}$$

### 3.1.4 Rate of Depreciation

$$\mathit{ 
r=r_B(1-T_C)
}$$

## 3.2 Leases

### 3.2.1 Net Advantage to Leasing 

$$\mathit{ 
NAL=PV(\textrm{Cost to Lease})-PV(\textrm{Cost to Buy})
}$$

\newpage

# Raising Equity

## 4.1 Taking Up Rights

### Step 1

$$\mathit{ 
P_s=P_0(1-d)
}$$

$$\mathit{d=\textrm{Discount (Not Rate)}}$$ $$\mathit{P_s=\textrm{New Offer Share Price}}$$ $$\mathit{P_0=\textrm{Current Share Price}}$$ $$\mathit{P_x=\textrm{Share Price Day After Offer}}$$

### Step 2

$$\mathit{ 
N^*=\frac{F}{P_s}                                                    
}$$

$$\mathit{F=\textrm{Funds to Be Raised}}$$ $$\mathit{N^*=\textrm{Number of New Shares Issued}}$$ $$\mathit{N=\textrm{Number of Current Shares}}$$

### Step 3

$$\mathit{ 
\frac{N^*}{N}=\textrm{Ratio Offered}                                                    
}$$

$$\mathit{\textrm{To Lowest Denominator}}$$ $$\mathit{\textrm{``Offered } N^* \textrm{ (New) for Every } N \textrm{ (Old)}"}$$

### Step 4

$$\mathit{
P_{x(Pre-Issue)}=\frac{(P_0)(N)+F}{(N+N^*)}
}$$

$$\mathit{ 
P_x=\frac{(P_0)(N)+(P_s)(N^*)}{(N+N^*)}                                                    
}$$

### Step 5 

$$\mathit{ 
\textrm{Rights Value}=P_x-P_s                                                    
}$$

$$\mathit{\textrm{If }P_x>P_s\textrm{: Capital Gain}}$$ $$\mathit{\textrm{If }P_x<P_s\textrm{: Capital Loss}}$$

## 4.2 Selling Rights

### Step 1 

* Find Original Shares Owned: $$\mathit{P_0N=x}$$
* Find Price to Sell New: $$\mathit{P_x-P_s=\textrm{Rights Value}}$$
* Find Proportion Entitled To: $$\mathit{\frac{N^*}{N}}$$
* Find Value of New: $$\mathit{(P_x-P_s)N}$$
* Determine Cost: $$\mathit{\textrm{Cost}=(P_0N)-((P_x-P_s)N^*)}$$ $$\mathit{\textrm{Should = }(P_0N)+(P_sN^*)}$$

### Step 2

* Find Day-After Value of Only Current Shares: $$\mathit{P_xN}$$
* Hence, Answers Should Be (=) Such That: \textit{``Value after selling new rights (=) value to buy current amount of shares owned, the day after''}

## 4.3 Sell & Take-Up (Tail Swallowing)

$$\mathit{ 
Y=\frac{(P_sN^*)}{P_x}                                                    
}$$

$$\mathit{Y=\textrm{Optimal Amount of Rights to Sell}}$$ $$\mathit{\textrm{Sell Newly Entitled Rights Proportion }Y\textrm{ to }P_s}$$ $$\mathit{\textrm{To Get Money for }(N-Y)\textrm{ New Shares At }P_x}$$

### Step 1 (Cost)

* Own $$\mathit{N\textrm{ @ }P_0}$$
* Sell $$\mathit{Y\textrm{ @ }(P_x-P_s)}$$
* Purchase $$\mathit{(N^*-Y)\textrm{ @ }P_s}$$

$$\mathit{ 
\textrm{Cost}=P_0N+((P_x-P_s)Y)-(P_s(N^*-Y))                                                    
}$$

$$\mathit{P_0N=\textrm{Original}}$$ $$\mathit{(P_x-P_s)Y=\textrm{Sold Rights}}$$ $$\mathit{P_s(N^*-Y)=\textrm{Taken Rights}}$$ $$\mathit{(P_x-P_sY)\textrm{ Should = }P_s(N^*-Y)}$$

### Step 2 (Value)

$$\mathit{ 
\textrm{Own }(N+N^*-Y)\textrm{ @ }P_x                                                    
}$$

$$\mathit{ 
\therefore\textrm{Value}=P_x(N+N^*-Y)                                                    
}$$
