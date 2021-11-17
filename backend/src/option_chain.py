import requests
import json
import pandas as pd

new_url = 'https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY'

headers = {'User-Agent': 'Mozilla/5.0'}
page = requests.get(new_url,headers=headers)
dajs = json.loads(page.text)


def fetch_oi(expiry_dt):
    ce_values = [data['CE'] for data in dajs['records']['data'] if "CE" in data and data['expiryDate'] == expiry_dt]
    pe_values = [data['PE'] for data in dajs['records']['data'] if "PE" in data and data['expiryDate'] == expiry_dt]

    ce_dt = pd.DataFrame(ce_values).sort_values(['strikePrice'])
    pe_dt = pd.DataFrame(pe_values).sort_values(['strikePrice'])
    # ce_dt.to_csv(r"C:\Users\Amarjith\Desktop\idx\idx\backend\data\ce_dt.csv\ce_dt.csv")
    print(ce_dt[['strikePrice','lastPrice']])
    return ce_dt

def get_option_chain():

    expiry_dt = '18-Nov-2021'
    return fetch_oi(expiry_dt)

if __name__ == '__main__':
    get_option_chain()
