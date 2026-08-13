 

 const EditIcon = ({ size = 24, color = 'currentColor', className = '', ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Outer Rounded Frame */}
      <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      
      {/* Pencil */}
      <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L11.25 15.75l-4 1 1-4Z" />
    </svg>
  );
};

export default EditIcon;