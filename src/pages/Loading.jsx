export const Loading = () => {
  return (
    <div className="flex-grow-1 bg-grey d-flex justify-content-center align-items-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
