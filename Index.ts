exports.handler = async (event) => {
   
   //const secret1 = '[first secret]';
   //const secret2 = '[second secret]';
   //const secret1 = process.env.FIRST_SECRET; 
   //const secret2 = process.env.SECOND_SECRET;
   const secret1 = await decryptSecret('FIRST_SECRET'); 
   const secret2 = await decryptSecret('SECOND_SECRET');;
    
   return `ssshhh! The secrets are: secret1: '${secret1}' secret2: '${secret2}'`;
    
};
