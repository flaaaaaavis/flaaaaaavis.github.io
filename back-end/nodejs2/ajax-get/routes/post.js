const produto = [
	{
	 "id": 1,
	 "nome": "Produto A" 
	}, {
	 "id": 3,
	 "nome": "Produto B"
 	}, {
 	 "id": 6,
 	 "nome": "Produto C"
 	}, {
 	 "id": 3, 
 	 "nome": "Produto D" 
}]

// exports.getParams = (req, res) => {
//     const name = req.query.nome;
//     const id = req.query.id;
    
//     if(name == undefined && id == undefined){
//         res.json(produto);
//     } else if(id == 1) {
//         res.json(Object.entries(produto[0]));
//     } else if(id == 6) {
//         res.json(Object.entries(produto[2]));
//     } else if(id == 3) {
//         let array1 = Object.entries(produto[1]);
//         let array2 = Object.entries(produto[3]);
//         res.json(array1.concat(array2));
//     } else {
//         res.json([]);
//     }
// };

exports.getParams = (req, res) => {
    
}