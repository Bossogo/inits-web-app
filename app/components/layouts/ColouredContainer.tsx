import Container from 'react-bootstrap/Container';

type ColouredContainerProps = {
    children: React.ReactNode
}

const ColouredContainer = ({children}:ColouredContainerProps) => {
  return (
    <>
        <Container fluid className='p-0 pt-md-5 bg__light-green'>
            {children}
        </Container>
    </>
  )
}
export default ColouredContainer