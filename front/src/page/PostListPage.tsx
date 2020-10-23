import React from 'react';
import Button from '../Components/common/Button';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

// function ExchangeRates() {
//     const { loading, error, data } = useQuery(EXCHANGE_RATES);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;

//     return data.rates.map(({ currency, rate }) => (
//         <div key={currency}>
//             <p>
//                 {currency}: {rate}
//             </p>
//         </div>
//     ));
// }

const PostListPage = () => {
    // return(
    //     <div>
    //     <Button>버튼</Button>
    //     </div>
    // );
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    console.log(loading)
    console.log(error)
    console.log(data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }:any) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ));
}

export default PostListPage;