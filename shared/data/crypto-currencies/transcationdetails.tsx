
import { Column } from "react-data-table-component-extensions";

interface ColumnsType {
    direction: string;
    position: string;
    transaction: string;
    date: string;
    from: string;
    to: string;
    idcard: string;
    currencyname: string;
    currency: string;
    profit: string;
    winning: string;
    taskinformation: string;
  }

export const columns : any = [
    {
        name: "S.No", 
        selector:(row:ColumnsType) => row.direction,
        sortable: true,
        cell: (row:ColumnsType) =>
            <span className="crypto-icon bg-primary-transparent me-3 my-auto">
                <i className={`fe fe-arrow-${row.direction}-${row.position} text-primary`}></i></span>
    },

    {
        name: "TRANSACTION HASH",
        selector: (row:ColumnsType) => row.transaction,
        cell: (row:ColumnsType) => <div className="fw-semibold">
            {row.transaction}
        </div>,
        sortable: true
    },
    {
        name: "DATE",
        selector: (row:ColumnsType) => row.date,
        sortable: true,
        cell: (row:ColumnsType) =>
            <div>
                {row.date}
            </div>

    },
    {
        name: "FROM",
        selector: (row:ColumnsType) => row.from,
        sortable: true,
        cell: (row:ColumnsType) =>
            <div>
                {row.from}
            </div>
    },
    {
        name: "TO",
        selector: (row:ColumnsType) => row.to,
        cell: (row:ColumnsType) =>
            <div className="d-flex my-auto w-35r">
                <div className="">
                <img src={row.idcard} className="avatar avatar-sm me-2"
                    alt={row.idcard}
                />
                </div>
                <span className="my-auto">{row.to}</span>
            </div>,

        sortable: true,

    },
    {
        name: "COIN",
        selector: (row:ColumnsType) => row.currencyname,
        sortable: true,
        cell: (row:ColumnsType) =>
            <div className="fw-semibold">
                <div className="d-flex my-auto">
                    <div className="avatar avatar-sm me-2">
                    <img
                        src={row.currency}
                        alt=""
                    />
                    </div>
                    <span className="my-auto">{row.currencyname}</span>
                </div>
            </div>

    },
    {
        name: "AMOUNT",
        selector: (row:ColumnsType) => row.profit,
        sortable: true,
        cell: (row:ColumnsType) =>
            <div className={`text-${row.winning} fw-bold`}>
                {row.profit}
            </div>
    },

    {
        name: "STATUS",
        selector: (row:ColumnsType) => row.taskinformation,
        sortable: true,
        cell: (row:ColumnsType) => <div className={`text-${row.winning} fw-bold`}>
            {row.taskinformation}
        </div>
    },
];

export const data = [
    {

        id: 1,
        direction: "up",
        position: "right",
        transaction: "#1242232401",
        date: "03/12/2020",
        from: "Olive Yew",
        idcard: "../../../assets/images/faces/11.jpg",
        to: "PegLegge",
        currency:"../../../assets/images/svgs/crypto-currencies/btc.svg" ,
        currencyname: "Bitcoin",
        profit: 5,
        winning: "success",
        taskinformation: "COMPLETED",
    },
    {
        id: 2,
        position: "left",
        direction: "down",
        transaction: "#1242232402",
        date: "05/12/2020",
        from: "Addie Minstra",
        idcard: "../../../assets/images/faces/2.jpg",
        to: "Art Decco",
        currency: "../../../assets/images/svgs/crypto-currencies/eth.svg",
        currencyname: "Ethereum",
        profit: -15,
        winning: "danger",
        taskinformation: "CANCELLED"
    },
    {
        id: 3,
        position: "left",
        direction: "down",
        transaction: "#1242232403",
        date: "14/12/2020",
        from: "Stan Dupp",
        idcard: "../../../assets/images/faces/3.jpg",
        to: "Neil Down",
        currency: "../../../assets/images/svgs/crypto-currencies/xrp.svg",
        currencyname: "Ripple",
        profit:-55,
        winning: "muted",
        taskinformation: "PENDING"
    },
    {
        id: 4,
        position: "right",
        direction: "up",
        transaction: "#1242232404",
        date: "16/12/2020",
        from: "Penny Black",
        idcard:"../../../assets/images/faces/4.jpg",
        to: "Anna Domino",
        currency: "../../../assets/images/svgs/crypto-currencies/dash.svg",
        currencyname: "Dash",
        profit:+25,
        winning: "success",
        taskinformation: "COMPLETED"

    },
    {
        id: 5,
        position: "left",
        direction: "down",
        transaction: "#1242232405",
        date: "08/12/2020",
        from: "Olive Yew",
        idcard: "../../../assets/images/faces/5.jpg",
        to: "Paul Misunday",
        currency: "../../../assets/images/svgs/crypto-currencies/ltc.svg",
        currencyname: "litecoin	",
        profit: 75,
        winning: "danger",
        taskinformation: "CANCELLED"
    },
    {
        id: 6,
        position: "left",
        direction: "down",
        transaction: "#1242232406",
        date: "20/12/2020",
        from: "Arty ficial",
        idcard: "../../../assets/images/faces/6.jpg",
        to: "Marsha Mello",
        currency: "../../../assets/images/svgs/crypto-currencies/xmr.svg",
        currencyname: "Monero",
        profit:55,
        winning: "success",
        taskinformation: "COMPLETED"
    },
    {
        id: 7,
        position: "left",
        direction: "down",
        transaction: "#1242232409",
        date: "03/12/2020",
        from: "Stew Gots",
        idcard: "../../../assets/images/faces/9.jpg",
        to: "Sara Bellum",
        currency: "../../../assets/images/svgs/crypto-currencies/waves.svg",
        currencyname: "Waves",
        profit:5,
        winning: "muted",
        taskinformation: "PENDING"
    },
    {
        id: 8,
        position: "right",
        direction: "up",
        transaction: "#1242232418",
        date: "20/12/2020",
        from: "Donatella Nobatt",
        idcard: "../../../assets/images/faces/7.jpg",
        to: "Peg Legge",
        currency: "../../../assets/images/svgs/crypto-currencies/steem.svg",
        currencyname: "Steem",
        profit: 75,
        winning: "success",
        taskinformation: "COMPLETED"
    },
    {
        id: 9,
        position: "left",
        direction: "down",
        transaction: "#1242232405",
        date: "08/12/2020",
        from: "Olive Yew",
        idcard: "../../../assets/images/faces/7.jpg",
        to: "Paul Misunday",
        currency: "../../../assets/images/svgs/crypto-currencies/ltc.svg",
        currencyname: "litecoin	",
        profit: 15,
        winning: "danger",
        taskinformation: "CANCELLED"
    },
    {
        id: 10,
        position: "left",
        direction: "down",
        transaction: "#1242232403",
        date: "14/12/2020",
        from: "Stan Dupp",
        idcard: "../../../assets/images/faces/5.jpg",
        to: "Neil Down",
        currency: "../../../assets/images/svgs/crypto-currencies/xrp.svg",
        currencyname: "Ripple",
        profit: 15,
        winning: "muted",
        taskinformation: "PENDING"
    },
    {
        id: 11,
        position: "left",
        direction: "down",
        transaction: "#1242232403",
        date: "24/12/2020",
        from: "Stan Dupp",
        idcard: "../../../assets/images/faces/6.jpg",
        to: "Neil Down",
        currency: "../../../assets/images/svgs/crypto-currencies/xrp.svg",
        currencyname: "Ripple",
        profit: 5,
        winning: "muted",
        taskinformation: "PENDING"
    },

    {
        id: 12,
        position: "right",
        direction: "up",
        transaction: "#1242232418",
        date: "20/12/2020",
        from: "Donatella Nobatt",
        idcard: "../../../assets/images/faces/7.jpg",
        to: "Peg Legge",
        currency: "../../../assets/images/svgs/crypto-currencies/steem.svg",
        currencyname: "Steem",
        profit: 5,
        winning: "success",
        taskinformation: "COMPLETED"
    }
]

export const tableData = {
    columns,
    data,
};