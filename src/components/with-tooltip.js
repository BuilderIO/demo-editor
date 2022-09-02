import Tooltip from "@mui/material/Tooltip";

// HOC to add a tooltip to a component's source on hover, for demo purposes
export function withTooltip(url, Component) {
  return (props) => (
    <Tooltip
      title={
        <div
          style={{
            fontSize: 14,
            fontWeight: "bold",
            cursor: 'pointer'
          }}
          onClick={() => {
            // Open with JS so will open in visual editor 
            // (by default links are intentionally disabled in the visual editor)
            open(url, "_blank");
          }}
        >
          Click here to view my source code
        </div>
      }
    >
      <div>
        <Component {...props} />
      </div>
    </Tooltip>
  );
}
