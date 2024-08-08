import { calculateInvestmentResults ,formatter} from "../util/investment";
export default function Calculation({Input}){

const calc= calculateInvestmentResults(Input);
const intial = calc[0].valueEndOfYear 
- calc[0].interest
-calc[0].annualInvestment;


return <table id="result">
<thead>
    <tr>
<th>Year</th>
<th>Investment Value</th>
<th>Intrest (Year)</th>
 <th>total investment</th>
 <th>Investment capital</th>
   
    </tr>
</thead>
<tbody>
{calc.map(yearData => {
    const total=yearData.valueEndOfYear
     - yearData.annualInvestment* yearData.year
     -intial;


     const totalInvested = yearData.valueEndOfYear-total ;
   
   return <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.valueEndOfYear)}</td>
        <td>{formatter.format(yearData.interest)}</td>
        <td>{formatter.format(total)}</td>
        <td> {formatter.format (totalInvested)}</td>

    </tr>
})}
</tbody>





</table>

}