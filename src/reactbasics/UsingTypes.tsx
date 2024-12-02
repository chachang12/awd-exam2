type LoadingProps = { isLoading: true; spinnerType: string };
type LoadedProps = { isLoading: false; data: any };

// Defining the union type for the component props
// Union means that the component can accept either of the two types
type ComponentProps = LoadingProps | LoadedProps;

const DataComponent: React.FC<ComponentProps> = (props) => {
  if (props.isLoading) {
    return <div>Loading {props.spinnerType}...</div>;
  }
  return <div>Data: {props.data}</div>;
}; 

export default DataComponent;