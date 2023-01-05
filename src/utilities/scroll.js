export const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}