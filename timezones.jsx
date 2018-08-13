const DateTime = require('luxon').DateTime;
const timezones = [
  {img: './timezones.widget/flags/svg/ar.svg', iana: 'America/Argentina/Buenos_Aires', people: 'Joselo, Hugo, Seba'},
  {img: './timezones.widget/flags/svg/uy.svg', iana: 'America/Montevideo', people: 'Santi'},
  {img: './timezones.widget/flags/svg/ca/qc.svg', iana: 'America/Toronto', people: 'Patrick'},
  {img: './timezones.widget/flags/svg/us/co.svg', iana: 'America/Denver', people: 'Mike'},
  {img: './timezones.widget/flags/svg/us/wa.svg', iana: 'America/Los_Angeles', people: 'Brian'},
];

export const refreshFrequency = 3000;
export const command = (cb) => cb(null, timezones.map(tz => ({img: tz.img, time: DateTime.local().setZone(tz.iana), people: tz.people})));


const style = {
  top: '10px',
  left: '10px',
  position: 'absolute',
  background: 'rgba(255, 255, 255, 0.2)',
  WebkitBackdropFilter: 'blur(20px)',
  tableLayout: 'auto',
  width: '100%',
  color: '#fff',
};

const imgStyle = {
  width: '50px'
}

const rowStyle = {
  margin: '5px 20px',
  width: '100%',
  fontSize: '18px',
};
const cellStyle = {
  whiteSpace: 'nowrap',
  margin: '0',
//  width: '75px',
}

export function updateProps(prev, action) {
  return action.output;
}

export function render(props) {
  return <table style={style}>
    {props.map(p => (
      <tr style={rowStyle}>
        <td style={cellStyle}><img style={imgStyle} src={p.img}/></td>
        <td style={cellStyle}>
          {p.time.toLocaleString(DateTime.TIME_SIMPLE)}
        </td>
        <td style={cellStyle}>
          👤 {p.people}
        </td>
      </tr>
    ))}
  </table>;
}
