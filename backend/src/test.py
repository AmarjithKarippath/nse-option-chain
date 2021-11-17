
expiry_dt = '18-Nov-2021'
identifier = "OPTIDXNIFTY18-11-2021CE15900.00"

if "CE" in identifier:
    strike = identifier.split('CE')[-1]
elif "PE" in identifier:
    strike = identifier.split('PE')[-1]
print(strike)
