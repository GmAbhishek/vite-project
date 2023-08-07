function HelloWorld() {
  const ListItems = ['hello','world',' hi' ,'nigga'];
  return (
    <>
      <ul className="list-group">
       
{ ListItems.map(item => <li>{item}</li>)
}     </ul>
    </>
  );
}
export default HelloWorld