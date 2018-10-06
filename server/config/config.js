// ====================
// Puerto
// =====================

process.env.PORT = process.env.PORT || 3000;
// Si estoy en produccion o en desarrollador

// =======================
//   Entorno
//========================

process.env.NODE_ENV=process.env.NODE_ENV || 'env';
// =======================
//   base de datos
//========================
let urlDB;

if (process.env.NODE_ENV==='env'){
urlDB= 'mongodb://localhost:27017/cafe';
    console.log("En local")

}else{

    urlDB= 'mongodb://admin:a123456@ds045622.mlab.com:45622/itd'
}
process.env.urlDB=urlDB;