/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/reactjs.jsx to edit this template
 */
import React from 'react'
export const Footer = () => {
        const titulo = "Dog Wow Corp";
        
        return(
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                  <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">

                  </a>
                  <span class="mb-3 mb-md-0 text-body-secondary">{titulo}</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">

                </ul>
            </footer>
  
        );
};
