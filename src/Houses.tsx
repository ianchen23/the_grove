import { useCallback, useEffect, useMemo, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

type Result = { id: number, value: number, address: string };

function Houses() {
  const [data, setData] = useState<ReadonlyArray<Result>>([]);

  const options = useMemo(() => ({
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'unofficial-redfin.p.rapidapi.com',
      'X-RapidAPI-Key': '87eb0ea82emsh6af8ff7b68678bbp14426fjsnaae9c10ae63c'
    }
  }), []);

  const properties = useMemo(() => ({
    '31454269': '2625 W 45TH',
    '32938723': '402 Paso Fino',
    '32600981': '1217 Logan Dr',
    '32832681': '8346 Glen Canyon Dr',
    '176210330': '2909 Sudha Dr',
    '32773921': '1003 N Riviera Cir'
  }), []);

  const calcTotal = useCallback((results: ReadonlyArray<Result>): number => results.reduce((sum, result) => sum + result.value, 0), []);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    Object.keys(properties).forEach((id, idx) => setTimeout(() =>
      fetch(`https://unofficial-redfin.p.rapidapi.com/properties/get-estimate?propertyId=${id}&listingId=0`, options)
        .then(response => response.json())
        .then(json => {
          const data = json['payload']['__root']['avmInfo'];
          setData(d => [...d, { 'id': data['propertyId'], 'value': data['predictedValue'], 'address': properties[data['propertyId'] as keyof typeof properties] } as Result]);
        })
        .catch(err => console.error(err))
      , idx * 1000),
    )
  }, [calcTotal, options, properties]);


  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">Estimate (Redfin)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.address}
              </TableCell>
              <TableCell align="right">{formatter.format(row.value)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align="right">{formatter.format(calcTotal(data))}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default Houses;
