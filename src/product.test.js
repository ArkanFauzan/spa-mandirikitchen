import React from 'react';
import {ProductComponent} from './components/product';
import {ListBarang} from './components/product/listbarang';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

const barang = {barang:[
    {
        kategori:"area memasak",
        nama:"Exhaust Hood w/ Filter dan tidak dengan Filter, termasuk lampu penerangan",
        img: "img/1.jpg",
        deskripsi:"List daftar harga per-meternya adalah sebagai berikut:",
        harga:"img/1a.jpg"
    },
    {
        kategori:"area memasak",
        nama:"Kwali Range Single, Double dan Triple",
        img: "img/2.jpg",
        deskripsi:"List daftar harga untuk kwali range adalah sebagai berikut: ",
        harga:"img/2a.jpg"
    },
    {
        kategori:"area mencuci",
        nama:"Solid dan Slotted Pan Rack 4 Tier",
        img: "img/10.jpg",
        deskripsi:"List daftar harga per-meternya adalah sebagai berikut: ",
        harga:"img/10a.jpg"
    },
    {
        kategori:"area mencuci",
        nama:"Sink",
        img: "img/11.jpg",
        deskripsi:"List daftar harga Sink adalah sebagai berikut : ",
        harga:"img/11a.jpg"
    },
  ]}

it('Product is renders correctly', () => {
    let component = renderer.create(<ProductComponent/>);  
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

    tree.props._handleChange;
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.useEffect;
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const { getByText } = render(<ListBarang barang={barang.barang} filter="semua kategori" />);
    const linkElement = getByText(/Filter dan tidak dengan Filter, termasuk lampu penerangan/i);
    expect(linkElement).toBeInTheDocument();
  });
