import data from "./companiesData"

const closing = [
    {
        companyName : "Infosys",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1132.15002 ,
            1167.40002 ,
            1122.90002 ,
            1099.40002 ,
            1097.59998 ,
            1097.34998 ,
            1094.90002 ,
            1111.94995 ,
            1125.9423 ,
            1122.7823 ,
            1197.1233 ,
            1178.7328 ,
            1173.8921 ,
            1134.7812 ,
            1135.7219 ,
            1131.2932 ,
            1189.1982 ,
            1198.1392 ,
            1211.9829 ,
            1291.8881 ,
            1128.7817 ,
            1289.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Flipkart",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1132.15002 ,
            1267.40002 ,
            1122.90002 ,
            1099.40002 ,
            1297.59998 ,
            1097.34998 ,
            1794.90002 ,
            1411.94995 ,
            1425.9423 ,
            1122.7823 ,
            1197.1233 ,
            1178.7328 ,
            1173.8921 ,
            1134.7812 ,
            1335.7219 ,
            1131.2932 ,
            1289.1982 ,
            1498.1392 ,
            1211.9829 ,
            1291.8881 ,
            1128.7817 ,
            1589.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Amazon",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            2132.15002 ,
            2167.40002 ,
            1122.90002 ,
            1099.40002 ,
            31097.59998 ,
            1097.34998 ,
            1094.90002 ,
            1111.94995 ,
            1125.9423 ,
            1122.7823 ,
            2197.1233 ,
            1178.7328 ,
            1173.8921 ,
            1134.7812 ,
            1235.7219 ,
            1131.2932 ,
            1189.1982 ,
            1298.1392 ,
            1211.9829 ,
            1291.8881 ,
            1728.7817 ,
            1289.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Wallmart",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1132.15002 ,
            1167.40002 ,
            1122.90002 ,
            1299.40002 ,
            1097.59998 ,
            1297.34998 ,
            1094.90002 ,
            1211.94995 ,
            1125.9423 ,
            1122.7823 ,
            1297.1233 ,
            1178.7328 ,
            1273.8921 ,
            1234.7812 ,
            1235.7219 ,
            1231.2932 ,
            1189.1982 ,
            1298.1392 ,
            1211.9829 ,
            1591.8881 ,
            1128.7817 ,
            1289.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Microsoft",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1132.15002 ,
            1167.40002 ,
            1122.90002 ,
            1099.40002 ,
            1097.59998 ,
            1297.34998 ,
            1094.90002 ,
            1411.94995 ,
            1125.9423 ,
            1222.7823 ,
            1697.1233 ,
            1178.7328 ,
            1273.8921 ,
            1134.7812 ,
            1135.7219 ,
            1231.2932 ,
            1189.1982 ,
            1398.1392 ,
            1211.9829 ,
            1491.8881 ,
            1128.7817 ,
            1489.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Tata Consultancy Services",
        price: 
        [
            1181.75 , 
            1354.59998 ,
            1133.19995 ,
            1332.15002 ,
            1267.40002 ,
            1122.90002 ,
            1299.40002 ,
            1097.59998 ,
            1297.34998 ,
            1094.90002 ,
            1311.94995 ,
            1125.9423 ,
            1522.7823 ,
            1197.1233 ,
            1578.7328 ,
            1373.8921 ,
            1134.7812 ,
            1235.7219 ,
            1131.2932 ,
            1589.1982 ,
            1198.1392 ,
            1611.9829 ,
            1291.8881 ,
            1828.7817 ,
            1289.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Bloomberg",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1732.15002 ,
            1167.40002 ,
            1222.90002 ,
            1299.40002 ,
            1097.59998 ,
            1297.34998 ,
            1294.90002 ,
            1111.94995 ,
            1225.9423 ,
            1122.7823 ,
            1297.1233 ,
            1178.7328 ,
            1473.8921 ,
            1134.7812 ,
            1235.7219 ,
            1131.2932 ,
            1489.1982 ,
            1198.1392 ,
            1411.9829 ,
            1291.8881 ,
            1128.7817 ,
            1389.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Nvidia",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1732.15002 ,
            1167.40002 ,
            1222.90002 ,
            1299.40002 ,
            1097.59998 ,
            1297.34998 ,
            1294.90002 ,
            1111.94995 ,
            1225.9423 ,
            1122.7823 ,
            1297.1233 ,
            1178.7328 ,
            1473.8921 ,
            1134.7812 ,
            1235.7219 ,
            1131.2932 ,
            1489.1982 ,
            1198.1392 ,
            1411.9829 ,
            1291.8881 ,
            1128.7817 ,
            1389.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Reliance",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1732.15002 ,
            1167.40002 ,
            1222.90002 ,
            1299.40002 ,
            1097.59998 ,
            1297.34998 ,
            1294.90002 ,
            1111.94995 ,
            1225.9423 ,
            1122.7823 ,
            1297.1233 ,
            1178.7328 ,
            1473.8921 ,
            1134.7812 ,
            1235.7219 ,
            1131.2932 ,
            1489.1982 ,
            1198.1392 ,
            1411.9829 ,
            1291.8881 ,
            1128.7817 ,
            1389.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Berkshire Hathaway",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1732.15002 ,
            1167.40002 ,
            1222.90002 ,
            1299.40002 ,
            1097.59998 ,
            1297.34998 ,
            1294.90002 ,
            1111.94995 ,
            1225.9423 ,
            1122.7823 ,
            1297.1233 ,
            1178.7328 ,
            1473.8921 ,
            1134.7812 ,
            1235.7219 ,
            1131.2932 ,
            1489.1982 ,
            1198.1392 ,
            1411.9829 ,
            1291.8881 ,
            1128.7817 ,
            1389.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Samsung",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1732.15002 ,
            1167.40002 ,
            1222.90002 ,
            1299.40002 ,
            1097.59998 ,
            1297.34998 ,
            1294.90002 ,
            1111.94995 ,
            1225.9423 ,
            1122.7823 ,
            1297.1233 ,
            1178.7328 ,
            1473.8921 ,
            1134.7812 ,
            1235.7219 ,
            1131.2932 ,
            1489.1982 ,
            1198.1392 ,
            1411.9829 ,
            1291.8881 ,
            1128.7817 ,
            1389.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Nike",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1732.15002 ,
            1167.40002 ,
            1222.90002 ,
            1299.40002 ,
            1097.59998 ,
            1297.34998 ,
            1294.90002 ,
            1111.94995 ,
            1225.9423 ,
            1122.7823 ,
            1297.1233 ,
            1178.7328 ,
            1473.8921 ,
            1134.7812 ,
            1235.7219 ,
            1131.2932 ,
            1489.1982 ,
            1198.1392 ,
            1411.9829 ,
            1291.8881 ,
            1128.7817 ,
            1389.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Tesla",
        price: 
        [
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1732.15002 ,
            1167.40002 ,
            1222.90002 ,
            1299.40002 ,
            1097.59998 ,
            1297.34998 ,
            1294.90002 ,
            1111.94995 ,
            1225.9423 ,
            1122.7823 ,
            1297.1233 ,
            1178.7328 ,
            1473.8921 ,
            1134.7812 ,
            1235.7219 ,
            1131.2932 ,
            1489.1982 ,
            1198.1392 ,
            1411.9829 ,
            1291.8881 ,
            1128.7817 ,
            1389.2183 ,
            1267.1287
        ]
    },
    {
        companyName : "Apple",
        price: 
        [   
            1181.75 , 
            1154.59998 ,
            1133.19995 ,
            1732.15002 ,
            1167.40002 ,
            1222.90002 ,
            1299.40002 ,
            1097.59998 ,
            1297.34998 ,
            1294.90002 ,
            1111.94995 ,
            1225.9423 ,
            1122.7823 ,
            1297.1233 ,
            1178.7328 ,
            1473.8921 ,
            1134.7812 ,
            1235.7219 ,
            1131.2932 ,
            1489.1982 ,
            1198.1392 ,
            1411.9829 ,
            1291.8881 ,
            1128.7817 ,
            1389.2183 ,
            1267.1287
        ]
    },
]


export default closing;