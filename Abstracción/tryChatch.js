
try { 
    nonExistentFunction();
}catch(error){
    console.log(error)
}

/* function nonExistentFunction(){

} */
try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
    } finally {
      console.log("finally");
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
  