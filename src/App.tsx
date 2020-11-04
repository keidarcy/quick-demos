import React, { useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const initState = {
  text: '',
  size: 'h1',
  bgColor: 'bg-light',
  fontColor: 'text-dark',
  position: '',
  image: ''
};

type ActionType = { field: string; value: string };

const reduer = (state: typeof initState, action: ActionType) => {
  const newState = { ...state, [action.field]: action.value };
  localStorage.setItem('SHOWCASES', JSON.stringify(newState));
  return newState;
};

function App() {
  const [state, dispatch] = useReducer(
    reduer,
    localStorage.getItem('SHOWCASES')
      ? JSON.parse(localStorage.getItem('SHOWCASES') as string)
      : initState
  );
  const bgColors = [
    'bg-primary',
    'bg-secondary',
    'bg-success',
    'bg-danger',
    'bg-warning',
    'bg-info',
    'bg-light',
    'bg-dark'
  ];
  const fontColors = [
    'text-primary',
    'text-secondary',
    'text-success',
    'text-danger',
    'text-warning',
    'text-info',
    'text-light',
    'text-dark'
  ];

  const sizes = ['h1', 'h2', 'h3', 'h4', 'h5'];

  const postions = ['flex-row', 'flex-row-reverse', 'flex-column', 'flex-column-reverse'];

  const images = [
    'https://lh6.googleusercontent.com/CmLF2OtWLmvHxxbpfbByAWha60zQuBta_jnYq0VN2e7VNfkoYN0RO2ua3hjFKKBfdP1-C-UdgE36OHpB2DX9bcvO_X8SUEdZVY0VTAvP0eU66RD3CN0mo6h48jsdtd2MdRM0C35euYc',
    'https://lh4.googleusercontent.com/8Ypdpv7qkZmFeKTMneRC1y3jdvMriv-9jLVcTD5RmXwu9abJrL7j8mQPZhI9gfje8IchKonzzWRAqxq75eMFxIkDCjtopGmkFxI902Y9aPu--qnNBW1BtWSefvjnp_1MkufGQyUxWPo',
    'https://lh6.googleusercontent.com/hu8GQaI2h69LPnOfnfwhIXteNpomSTnRA5WYVRo914EX5DjQegPPl7GnidN08TEWqWhBAohrGCdIQy7eSG5pNbio2cDSQJyycnPlYWp6avPAKwXv3-fgz_JI77gj4YsPhhAOCqdw3sQ',
    'https://lh4.googleusercontent.com/3tc0pvYNOhkGnO7ZPt029CWjAsByEU74tRcP27-LxaWicT-L-3SugaPBCyOEdBFMcR8ki7JKvdaxx15KC2Q87skZTQEYdo3emLckS2KI6_2OL3tNvwzDe8fTM9356Y8wneeX_OtJFnw',
    'https://lh3.googleusercontent.com/mSKDKszuD_mgkxnhUjjPVA8inNFphytqOxa98pu4Od5sA3bnPVrcTr0EOIizt5mwpwYVixnV8997utBA7SgwNJmLIYv-Yk_kMsInpIIv93mvWvD6BBPe48sKcTmssqmwTZGduRvMLEk'
  ];

  const toFullWidth = (value: string) => {
    if (!value) return value;
    return String(value).replace(/[!-~]/g, function (all) {
      return String.fromCharCode(all.charCodeAt(0) + 0xfee0);
    });
  };

  return (
    <>
      <div className="my-5">
        <div className="mx-auto" style={{ width: '30rem' }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={state.text}
              onChange={(e) => dispatch({ field: 'text', value: e.target.value })}
            />
          </div>
          <label htmlFor="background color">Background Color</label>
          <div className="d-flex p-2 bd-highlight">
            {bgColors.map((c) => (
              <div
                key={c}
                className={`card ${c} mx-1`}
                style={{ width: '1rem', height: '1rem' }}
                onClick={(e) => dispatch({ field: 'bgColor', value: c })}
              ></div>
            ))}
          </div>
          <label htmlFor="font color">Font Color</label>
          <div className="d-flex p-2 bd-highlight">
            {bgColors.map((c, index) => (
              <div
                key={c}
                className={`card ${c} mx-1`}
                style={{ width: '1rem', height: '1rem' }}
                onClick={() => dispatch({ field: 'fontColor', value: fontColors[index] })}
              ></div>
            ))}
          </div>
          <label htmlFor="font size">Font Size</label>
          <div className="d-flex p-2 bd-highlight">
            {sizes.map((s) => (
              <div
                key={s}
                className={`card mx-1`}
                style={{ width: '2rem', height: '2rem' }}
                onClick={() => dispatch({ field: 'size', value: s })}
              >
                {s}
              </div>
            ))}
          </div>
          <label htmlFor="position">Position</label>
          <div className="d-flex p-2 bd-highlight">
            {postions.map((p) => (
              <div
                key={p}
                className="mx-1 border border-secondary rounded"
                onClick={() => dispatch({ field: 'position', value: p })}
              >
                {p}
              </div>
            ))}
          </div>
          <label htmlFor="image">Image</label>
          <div className="d-flex p-2 bd-highlight">
            {images.map((i) => (
              <img
                src={i}
                key={i}
                alt={i}
                className="mx-1 rounded-sm"
                width="200px"
                onClick={() => dispatch({ field: 'image', value: i })}
              />
            ))}
          </div>
          <div
            className={`container card ${state.bgColor} mb-3 ${state.fontColor}`}
            style={{ minWidth: '40rem' }}
          >
            <div className={`d-flex card-body ${state.size} ${state.position}`}>
              <p
                className="card-text font-weight-bold"
                style={{ fontFamily: "'Pinyon Script', cursive" }}
              >
                {toFullWidth(state.text)}
              </p>
              <p
                className="card-text font-weight-bold"
                style={{ fontFamily: "'Pinyon Script', cursive" }}
              >
                {state.text}
              </p>
              <p
                className="card-text"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {state.text}
              </p>
              {state.image ? <img src={state.image} alt="penggin" width="100px" /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
