import React from 'react'
import Carousel from 'better-react-carousel'
import Sliders from './carousels copy/topcarousel/Sliders'
import { Grid, GridItem ,Text,Divider} from '@chakra-ui/react'
const  Smartphones= () => {
  return (
      <div>
            <Sliders/>
            <div>
            
            </div>
<div>
<Grid
  h='auto'
  templateRows='repeat(8, 1fr)'
  templateColumns='repeat(10, 1fr)'
  gap={4}
>
<GridItem rowSpan={8} colSpan={7}>
<div>
      <Text style={{fontSize:'24px',color:"#333",fontWeight:'400',paddingBottom:'10px',paddingLeft:'17px'}}>LATEST MOBILE</Text>
    <Carousel cols={4} rows={1} style={{border:'1px solid red',height:"20px",marginLeft:'100px'}} loop>
      <Carousel.Item  >
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"70%"}   style={{display:'block',margin:'auto'}} src="https://www.reliancedigital.in/medias/Our-Latest-Smartphones-iPhone-14-03-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2NDQ0fGltYWdlL2pwZWd8aW1hZ2VzL2gwZi9oMTkvOTk0MDI1Njc1MTY0Ni5qcGd8ZDNmYjBhZjk1MDM4YzU1ZDljNzcwOTE3NTZmZjA4ZDg5MDAxNjQ3NDhkYzBkNGI3YzdiODA4MmYxMTUxNTU3ZA" alt="" />
      </div>
      </Carousel.Item>
      <Carousel.Item  >
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"70%"}   style={{display:'block',margin:'auto'}} src="https://www.reliancedigital.in/medias/Our-Latest-Smartphones-Oppo-A17K-03-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w4MTgyfGltYWdlL2pwZWd8aW1hZ2VzL2gyNS9oMDgvOTk0MDI1NjgxNzE4Mi5qcGd8ZGQ2YTQ2YTI0OGNmOTIwZTk4NTVlOTk1YzJmZjE2ODE2NDEyMGRmMDM2MDBkMDAwNzhmYzU4YzkzMDIyM2Y5Yg" alt="" />
      </div>
      </Carousel.Item>
      <Carousel.Item  >
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"70%"}   style={{display:'block',margin:'auto'}} src="https://www.reliancedigital.in/medias/Our-Latest-Smartphones-Realme-10-Pro-03-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMDc2OHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaDc4Lzk5NDAyNTY4ODI3MTguanBnfGNiNTlmMWY4MTBmOTIzNTUwMzEyZjM1MTcxNDUwYjQxZDc4NTBjOThmOGExZDBhNTQ2ZDE1OWNlYzg3MDRkMmY" alt="" />
      </div>
      </Carousel.Item>
      <Carousel.Item  >
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"70%"}   style={{display:'block',margin:'auto'}} src="https://www.reliancedigital.in/medias/Our-Latest-Smartphones-Redmi-11-Prime-03-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMDA2N3xpbWFnZS9qcGVnfGltYWdlcy9oZGQvaDk5Lzk5NDAyNTY5NDgyNTQuanBnfGQ5M2ZhNjg4M2I2YmViMGE0NGYxMzk5OWI2NTdkMGU5YjAwNjExZGEwZjU2NzRhZjNlNGFiZjJiZWE2YWIwNjY" alt="" />
      </div>
      </Carousel.Item>
      <Carousel.Item  >
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"70%"}   style={{display:'block',margin:'auto'}} src="https://www.reliancedigital.in/medias/Our-Latest-Smartphones-Samsung-Galaxy-A04-03-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w4MjQ0fGltYWdlL2pwZWd8aW1hZ2VzL2hiNS9oZDMvOTk0MDI1NzAxMzc5MC5qcGd8YTM4MWIzNjBkM2M0MWRmMTNhMmQ4NzRiZTk4YzczZmRkMDEzNWU3NmVhZmEyYjk0ZTQzMTBlY2Q1NDU3MmViMA" alt="" />
      </div>
      </Carousel.Item>
      <Carousel.Item  >
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"70%"}   style={{display:'block',margin:'auto'}} src="https://www.reliancedigital.in/medias/Our-Latest-Smartphones-Vivo-Y02-03-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w3NzE1fGltYWdlL2pwZWd8aW1hZ2VzL2g1ZS9oYzAvOTk0MDI1NzA3OTMyNi5qcGd8MzczZTY2ZjhhN2NhMDcxMmQxZDkwNjY5MDhjOTYyYjBlMGE0N2E4OWIwZWRjMWJiOGVkMGZiMjk1YTUzYzI0MA" alt="" />
      </div>
      </Carousel.Item>
      <Carousel.Item  >
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"70%"}   style={{display:'block',margin:'auto'}} src="https://www.reliancedigital.in/medias/Our-Latest-Smartphones-Samsung-Galaxy-A04e-03-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w5MDIwfGltYWdlL2pwZWd8aW1hZ2VzL2hmZC9oNDEvOTk0MDI1NzE0NDg2Mi5qcGd8ZjhlYTA3OGIwMTI4M2Q4M2IyM2I4OWRjODYwYjg3ZDMyYjQ2ZDYwYWEyNGRmODYwYjQ2NzlmNzA2NTA3NzNkMg" alt="" />
      </div>
      </Carousel.Item>
      <Carousel.Item  >
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"70%"}   style={{display:'block',margin:'auto'}} src="https://www.reliancedigital.in/medias/Our-Latest-Smartphones-Oppo-A17K-03-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w4MTgyfGltYWdlL2pwZWd8aW1hZ2VzL2gyNS9oMDgvOTk0MDI1NjgxNzE4Mi5qcGd8ZGQ2YTQ2YTI0OGNmOTIwZTk4NTVlOTk1YzJmZjE2ODE2NDEyMGRmMDM2MDBkMDAwNzhmYzU4YzkzMDIyM2Y5Yg" alt="" />
      </div>
      </Carousel.Item>
  
  </Carousel>
  </div>
  <div style={{height:'10px',backgroundColor:'#e9ebee',width:'97%',margin:'auto',marginTop:'20px'}}>
      
  </div>
      <div style={{marginTop:'20px'}}>
      <Text style={{fontSize:'24px',color:"#333",fontWeight:'400',paddingBottom:'10px',paddingLeft:'17px'}}>SHOP BY BRANDS</Text>
    <Carousel cols={4} rows={2} style={{border:'1px solid red',height:"20px",marginLeft:'100px'}} loop>
      <Carousel.Item >
      <a href='/AllProducts/Apple'> <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"60%"}   style={{display:'block',margin:'auto',paddingTop:'12%',paddingBottom:'12%'}} src="https://www.reliancedigital.in/medias/Apple-Logo-final.jpg?context=bWFzdGVyfGltYWdlc3wxODc2fGltYWdlL2pwZWd8aW1hZ2VzL2g3ZS9oZTAvOTA5ODk0MTM2NjMwMi5qcGd8NmU2MDIzODlkODBiNzFlMWQzZDZhNjMxN2I1OTllM2VkMGVlZTVmNWQyZDgwMDA3MDU4MmFjODlhZDMyNTQ3Mw" alt="" />
      </div></a>
      </Carousel.Item>
      <Carousel.Item  >
            <a href='/AllProducts/One Plus'>
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"60%"}   style={{display:'block',margin:'auto',paddingTop:'12%',paddingBottom:'12%'}} src="https://www.reliancedigital.in/medias/Smartphone-Shop-By-Brands-OnePlus.jpg?context=bWFzdGVyfGltYWdlc3wyNjQyfGltYWdlL2pwZWd8aW1hZ2VzL2hjNi9oNTUvOTQ3Mzc1OTcwNzE2Ni5qcGd8ZjcyZDZmOGZmNDczNTY1ZTgwMDQ0Mzc1NmM3NWJlOGFiMzMyNGJjZmJjN2MyM2NhM2NmYTM4NzJlZGNmNjEzOQ" alt="" />
      </div>
      </a>
      </Carousel.Item>
      <Carousel.Item  >
      <a href='/AllProducts/Realme'>
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"60%"}   style={{display:'block',margin:'auto',paddingTop:'12%',paddingBottom:'12%'}} src="https://www.reliancedigital.in/medias/Smartphone-Shop-By-Brands-Realme.jpg?context=bWFzdGVyfGltYWdlc3w1NTkyfGltYWdlL2pwZWd8aW1hZ2VzL2hlMS9oMzYvOTQ3Mzc1OTY0MTYzMC5qcGd8MGMxNDBhMWRmODcxODgzNGMwMjBmYjk2MTU2NTYyZWZlNDBkNTM5OGNhNzY4MmU2NTM2NmRjZGQ1YzQ1MjE1Yg" alt="" />
      </div>
      </a>
      </Carousel.Item>
      <Carousel.Item  >
            <a href='/AllProducts/VIVO'>
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"60%"}   style={{display:'block',margin:'auto',paddingTop:'12%',paddingBottom:'12%'}} src="https://www.reliancedigital.in/medias/Vivo-Logo-final.jpg?context=bWFzdGVyfGltYWdlc3w1OTM2fGltYWdlL2pwZWd8aW1hZ2VzL2g2Yy9oNjQvOTA5ODk0MTQzMTgzOC5qcGd8MDZhNTdmMjE2Y2Q2ZGJjNzE2MzQ5N2JjZTkzZWQ5OGJhZGNhMGQ4MTkwOTNlMmIwYTE1NzJlNGIxZjhiZWZkNg" alt="" />
      </div>
      </a>
      </Carousel.Item>
      <Carousel.Item  >
            <a href='/AllProducts/Samsung'>
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"60%"}   style={{display:'block',margin:'auto',paddingTop:'12%',paddingBottom:'12%'}} src="https://www.reliancedigital.in/medias/Samsung-Logo-final.jpg?context=bWFzdGVyfGltYWdlc3w0NTIyfGltYWdlL2pwZWd8aW1hZ2VzL2gxYy9oNDcvOTQ2MjEzNzg4MDYwNi5qcGd8ZmMxZGU1ODY3MGEzZjBkYzg2Y2EwNDRlZWE2ZjE2MmQ5NjY4MDQ4YjkzM2U1ZWNmOTkzNzEwNDgxNmI0NmUzYQ" alt="" />
      </div>
      </a>
      </Carousel.Item>
      <Carousel.Item  >
      <a href='/AllProducts/Xiaomi'>
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"60%"}   style={{display:'block',margin:'auto',paddingTop:'12%',paddingBottom:'12%'}} src="https://www.reliancedigital.in/medias/Logo-Mi.jpg?context=bWFzdGVyfGltYWdlc3w2MDQ0fGltYWdlL2pwZWd8aW1hZ2VzL2gwOC9oNWIvOTI5MDUzNjY4MTUwMi5qcGd8ZTY0NzNkZjVlY2U3OWRlNGZiYmIxOTY4ZWFkYjQ5NmIzNTZmYzU3YjM4NGUyY2Q2NTU4NzlhMjllMWRjYThkMA" alt="" />
      </div>
      </a>
      </Carousel.Item>
      <Carousel.Item  >
      <a href='/AllProducts/OPPO'>
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"60%"}   style={{display:'block',margin:'auto',paddingTop:'12%',paddingBottom:'12%'}} src="https://www.reliancedigital.in/medias/Shop-By-Brands-Oppo.jpg?context=bWFzdGVyfGltYWdlc3w1OTA0fGltYWdlL2pwZWd8aW1hZ2VzL2hlNS9oMjIvOTMzODQ4MDkxODU1OC5qcGd8ZDY0MWRlOTNhOThlMDNhZGIyYTc2MGI1NzczYTUzOGUyMGJhZDY4MTlkOTlhNGEyNWEyNzI2ZTQ1ZWE0ODJhZA" alt="" />
      </div>
      </a>
      </Carousel.Item>
      <Carousel.Item  >
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"60%"}   style={{display:'block',margin:'auto',paddingTop:'12%',paddingBottom:'12%'}} src="https://www.reliancedigital.in/medias/Motorola-Logo-final.jpg?context=bWFzdGVyfGltYWdlc3wzMjQ2fGltYWdlL2pwZWd8aW1hZ2VzL2gxYi9oMDkvOTA5ODk0MjI1MTAzOC5qcGd8NTgzNjhiZDg0Yzg3NzEzNmU5YWU4OTBjYTk2NmMwN2M5ODAxZWFjM2FmZmJhNDEzNTkxN2I3ZjlhY2YxNWMxNQ" alt="" />
      </div>
      </Carousel.Item>
      <Carousel.Item  >
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"60%"}   style={{display:'block',margin:'auto',paddingTop:'12%',paddingBottom:'12%'}} src="https://www.reliancedigital.in/medias/Nokia-Logo-final.jpg?context=bWFzdGVyfGltYWdlc3w2MzQ1fGltYWdlL2pwZWd8aW1hZ2VzL2gwZC9oY2QvOTA5ODk0MjE4NTUwMi5qcGd8MmM4ODE0ZDBmOTNkYWRmYjJjMzMwYTIxZGRhZjI3NDQ1ZWU2ZTZmODA5ODJhOWQxNGM4YjZkMGRhNjE2NjFhZA" alt="" />
      </div>
      </Carousel.Item>
      <Carousel.Item  >
      
      <a href='/AllProducts/Tecno'>
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"60%"}   style={{display:'block',margin:'auto',paddingTop:'12%',paddingBottom:'12%'}} src="https://www.reliancedigital.in/medias/TECNO.jpg?context=bWFzdGVyfGltYWdlc3w2NjExfGltYWdlL2pwZWd8aW1hZ2VzL2hjYy9oMTQvOTg3MTE1MTMwMDYzOC5qcGd8YTFmYTY3NTMxNTZiY2NlNDc5MDE5NmI0NGUwYjRkMzkyNmZkYTk0MjE4OGI0Y2M3Nzg0N2FhNmNiYjUwNzAzYQ" alt="" />
      </div>
      </a>
      </Carousel.Item>
      <Carousel.Item  >
       <div style={{height:'auto',border:'1px solid #e5e5e5'}}>
            <img width={"70%"}   style={{display:'block',margin:'auto',paddingTop:'12%',paddingBottom:'12%'}} src="https://www.reliancedigital.in/medias/itel-Logo-01.jpg?context=bWFzdGVyfGltYWdlc3wxODQwNDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2hjZC85NTE5MDM2ODU4Mzk4LmpwZ3w2ZTNhZmE1N2QxZTUwZmY5YzUyMjAwNzY2NmQzOWE5MGQ4YWQ0MGJlZDU0MzljN2MxNmJkYzcyMWE0MGY0Yzkz" alt="" />
      </div>
      </Carousel.Item>
  
  </Carousel>
  <div style={{height:'10px',backgroundColor:'#e9ebee',width:'97%',margin:'auto',marginTop:'20px'}}>
      
      </div>
  </div>

</GridItem>
  <GridItem rowSpan={8} colSpan={3} >
      <div style={{paddingLeft:'25px',paddingRight:'60px'}}>
  <Text style={{fontSize:'26px',color:"#333",fontWeight:'400'}}>FROM OUR RESOURCE CENTRE</Text>
  <Text fontSize={'15px'} mt="10px" marginBottom={"10px"} fontWeight='bold'>Unfolding the new Samsung Galaxy Z Fold4 and Z Flip4</Text>
  <img  src="https://www.reliancedigital.in/wp-content/uploads/2022/08/cover_galaxy_zfold4_zflip4.jpg" alt="" />
   
  <div style={{height:'1px',backgroundColor:'#e9ebee',width:'100%',margin:'auto',marginTop:'20px'}}>
      
  </div>
  <Text fontSize={'15px'} mt="20px"  marginBottom={"10px"} fontWeight='bold'>Motorola e32s – No more quality and performance compromises</Text>
  <img src="https://www.reliancedigital.in/wp-content/uploads/2022/06/motorola_E32s_cover.jpg" alt="" />
  <div style={{height:'1px',backgroundColor:'#e9ebee',width:'100%',margin:'auto',marginTop:'20px'}}>
      
      </div>
  <Text fontSize={'15px'} mt="20px"  marginBottom={"10px"} fontWeight='bold'>Samsung Galaxy S22, S22+ and S22 Ultra – A big bang return</Text>
  <img src="https://www.reliancedigital.in/wp-content/uploads/2022/02/Samsung_S22_Cover.jpg" alt="" />

  <div style={{height:'1px',backgroundColor:'#e9ebee',width:'100%',margin:'auto',marginTop:'20px'}}></div>

  <Text fontSize={'15px'} mt="20px" marginBottom={"10px"} fontWeight='bold'>OnePlus Nord CE 2 – Plus a ton of features!</Text>
  <img src="https://www.reliancedigital.in/wp-content/uploads/2022/02/cover_oneplus_nord_ce2.jpg" alt="" />
  </div>
  <div style={{height:'1px',backgroundColor:'#e9ebee',width:'100%',margin:'auto',marginTop:'20px'}}></div>

  </GridItem>

 
</Grid>
</div>
</div>
  )
}

export default Smartphones