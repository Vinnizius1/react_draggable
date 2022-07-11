import style from "./form.module.css";
import plusIcon from "../assets/img/plusIcon.svg";
import drag from "../assets/img/drag.svg";
import trash from "../assets/img/trash.svg";
import { useRef, useState } from "react";

function Form() {
  // useState
  const [products, setProducts] = useState([
    "Produto 01",
    "Produto 02",
    "Produto 03",
  ]);

  const [newProduct, setNewProduct] = useState("");

  // salva a referência
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  // ordenando
  const handleSort = () => {
    let _products = [...products];

    const draggedItem = _products.splice(dragItem.current, 1)[0]; // com o [0] salvaremos o item

    // troca as posições
    _products.splice(dragOverItem.current, 0, draggedItem);

    // agora reinicia a posição
    dragItem.current = null;
    dragOverItem.current = null;

    // por fim, atualiza o array
    setProducts(_products);
  };

  const handleProductChange = (e) => {
    setNewProduct(e.target.value);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const _products = [...products];
    _products.push(newProduct);
    setProducts(_products);
  };

  const allowDrop = (e) => {
    e.preventDefault();
    // e.target.style.background = "green";
  }

  return (
    <form className={style.form}>
      <span className={style.span_primary}>
        <input
          type="text"
          className={style.input_principal}
          placeholder="Qual lista você deseja criar?"
          onChange={handleProductChange}
          minLength="1"
          maxLength="25"
          required
        />
        <input
          type="image"
          onClick={handleAddProduct}
          className={style.sinal}
          alt="sinal de adição"
          src={plusIcon}
          height="18"
          width="18"
        />
      </span>

      {/* Aqui irão as listas criadas */}
      <div className={style.list_container}>
        <div className={style.secondary}>
          <img src={drag} alt="ícone para arrastar" height="36" width="36" />

          <h3>
            <b>Lista de Desejos</b>
          </h3>

          <img
            className={style.trash}
            src={trash}
            alt="ícone para adicionar"
            height="18"
            width="18"
          />
        </div>

        <span className={style.span_secondary}>
          <input
            className={style.subItens_text}
            type="text"
            placeholder="Adicione sub-itens a sua lista"
          />
          {/* <img
            className={style.sinal_subItem}
            src={plusIcon}
            alt="sinal de adição"
          /> */}
          <input
          type="image"
          className={style.sinal_subItem}
          alt="sinal de adição"
          src={plusIcon}
          height="18"
          width="18"
        />
        </span>

        <div className={style.draggable}>
          {products.map((product, index) => (
            <div
              key={index}
              className={style.children}
              draggable
              // onDragStart={(e) => onDragStart(e, index)}
              onDragStart={() => (dragItem.current = index)}
              onDragEnter={() => (dragOverItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={allowDrop}
            >
              <p className={style.parag}>{product}</p>
              <img className={style.trash_item} src={trash} alt="sinal de adição" />
            </div>
          ))}
         
        </div>
      </div>
    </form>
  );
}

export default Form;
