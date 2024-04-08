import style from "./select.module.css";
export default function Select(){
    return(
        <select name="language" id="lang" >
          <option value="english">english</option>
          <option value="hindi">hindi</option>
        </select>
    );
}