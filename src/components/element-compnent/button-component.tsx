import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "../../styles/element-styles/button-component.scss";
interface Styles {
  title: string | any;
  height: string;
  width: string;
  backgroundColor: string;
  color: string;
  disabled?: boolean;
  margin?: string;
  boxShadow?: string;
  border?: string;
  styles?: any;
  handleClick: () => void;
  className:
    | "button-component"
    | "button-component common-btn"
    | "button-component-hover"
    | "button-component-hover common-btn"
    | "button-component-hover cancel"
    | "button-component-hover disabled"
    | "button-component disabled"
    | "button-border";
}

export default function ButtonComponent({
  title,
  height,
  width,
  disabled,
  boxShadow,
  backgroundColor,
  color,
  styles,
  handleClick,
  margin,
  border,
  className,

}: Styles) {
  return (
    <div style={{ width, margin, ...styles }}>
      <button
        className={className}
        style={{
          height,
          width: "100%",
          boxShadow,
          backgroundColor,
          color,
          border,
          ...styles
        }}
        onClick={() => handleClick()}
        disabled={disabled}
      >
        {title}
        <MdOutlineKeyboardArrowRight
          className="arrow-icon"
          style={{ display: "none" }}
        />
      </button>
    </div>
  );
}
