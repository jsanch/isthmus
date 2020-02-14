import React, { Component } from 'react';

import { render } from 'react-dom';
import { connect } from 'react-redux';
import { operation } from '@carto/carto.js';
import '@carto/airship-style';
import Formula from '../widgets/Formula'
import Export from '../widgets/Export'
import Table from '../widgets/Table'
import Badge from '../widgets/Badge'
import C from '../../data/C'
import axios from 'axios';


class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    muni_query:`SELECT muni,ccaa,isla,prov,nivel_actual,nivel_optimo,pobmuni,numservicios,asegsaludmuni,asegsaludcolmuni,asegsaludindmuni,clientesnosaludmuni,propsaludmuni,capital,cod_muni,numservicios_a_t_s_enfermeria,numservicios_alergologia,numservicios_anatomia_patologica,numservicios_angiologia_y_cirugia_vascular,numservicios_angiologia_pruebas_diagnosticas,numservicios_analisis_clinicos,numservicios_aparato_digestivo,numservicios_aparato_digestivo_endoscopias,numservicios_cardiologia,numservicios_cardiologia_hemodinamia,numservicios_cardiologia_pruebas_diagnosticas,numservicios_chequeos_medicos,numservicios_cirugia_cardiovascular,numservicios_cirugia_general_y_digestiva,numservicios_cirugia_maxilofacial,numservicios_cirugia_pediatrica,numservicios_cirugia_plastica_y_reparadora,numservicios_cirugia_refractiva_laser,numservicios_cirugia_toracica,numservicios_densitometria_osea,numservicios_dermatologia,numservicios_endocrinologia,numservicios_fisioterapia,numservicios_ginecologia_y_obstetricia,numservicios_hematologia_y_hemoterapia,numservicios_hospitalizacion,numservicios_hospitalizacion_psiquiatrica,numservicios_inmunologia,numservicios_litotricia_renal,numservicios_logopedia_y_logofoniatria,numservicios_medicina_deportiva,numservicios_medicina_general,numservicios_medicina_intensiva,numservicios_medicina_interna,numservicios_medicina_nuclear,numservicios_nefrologia,numservicios_neumologia,numservicios_neurocirugia,numservicios_neurofisiologia_clinica,numservicios_neurologia,numservicios_oftalmologia,numservicios_oncologia_medica,numservicios_oncologia_radioterapica,numservicios_otorrinolaringologia,numservicios_pediatria,numservicios_podologia,numservicios_preparacion_al_parto,numservicios_psiquiatria,numservicios_puericultura,numservicios_radiologia_convencional,numservicios_radiologia_intervencionista,numservicios_radiologia_ecografia,numservicios_radiologia_mamografia,numservicios_rehabilitacion,numservicios_reproduccion_asistida,numservicios_resonancia_magnetica_r_m_n,numservicios_reumatologia,numservicios_t_a_c_escaner,numservicios_tratamiento_del_dolor,numservicios_traumatologia_y_cir_ortopedica,numservicios_urgencias_ambulatorias,numservicios_urgencias_cardiovasculares,numservicios_urgencias_ginecologicas_y_obstetricas,numservicios_urgencias_medico_quirurgicas,numservicios_urgencias_oftalmologicas,numservicios_urgencias_otorrinolaringologicas,numservicios_urgencias_pediatricas,numservicios_urgencias_psiquiatricas,numservicios_urgencias_traumatologicas,numservicios_urologia,perfil_a_t_s_enfermeria,perfil_alergologia,perfil_anatomia_patologica,perfil_angiologia_y_cirugia_vascular,perfil_angiologia_pruebas_diagnosticas,perfil_analisis_clinicos,perfil_aparato_digestivo,perfil_aparato_digestivo_endoscopias,perfil_cardiologia,perfil_cardiologia_hemodinamia,perfil_cardiologia_pruebas_diagnosticas,perfil_chequeos_medicos,perfil_cirugia_cardiovascular,perfil_cirugia_general_y_digestiva,perfil_cirugia_maxilofacial,perfil_cirugia_pediatrica,perfil_cirugia_plastica_y_reparadora,perfil_cirugia_refractiva_laser,perfil_cirugia_toracica,perfil_densitometria_osea,perfil_dermatologia,perfil_endocrinologia,perfil_fisioterapia,perfil_ginecologia_y_obstetricia,perfil_hematologia_y_hemoterapia,perfil_hospitalizacion,perfil_hospitalizacion_psiquiatrica,perfil_inmunologia,perfil_litotricia_renal,perfil_logopedia_y_logofoniatria,perfil_medicina_deportiva,perfil_medicina_general,perfil_medicina_intensiva,perfil_medicina_interna,perfil_medicina_nuclear,perfil_nefrologia,perfil_neumologia,perfil_neurocirugia,perfil_neurofisiologia_clinica,perfil_neurologia,perfil_oftalmologia,perfil_oncologia_medica,perfil_oncologia_radioterapica,perfil_otorrinolaringologia,perfil_pediatria,perfil_podologia,perfil_preparacion_al_parto,perfil_psiquiatria,perfil_puericultura,perfil_radiologia_convencional,perfil_radiologia_intervencionista,perfil_radiologia_ecografia,perfil_radiologia_mamografia,perfil_rehabilitacion,perfil_reproduccion_asistida,perfil_resonancia_magnetica_r_m_n,perfil_reumatologia,perfil_t_a_c_escaner,perfil_tratamiento_del_dolor,perfil_traumatologia_y_cir_ortopedica,perfil_urgencias_ambulatorias,perfil_urgencias_cardiovasculares,perfil_urgencias_ginecologicas_y_obstetricas,perfil_urgencias_medico_quirurgicas,perfil_urgencias_oftalmologicas,perfil_urgencias_otorrinolaringologicas,perfil_urgencias_pediatricas,perfil_urgencias_psiquiatricas,perfil_urgencias_traumatologicas,perfil_urologia FROM allinfomuni where asegsaludmuni > 0`,
    proveedor_query:`SELECT nombre_del_centro,codigo_pas,centro_pas, dir_centro,telefono FROM proveedores_toplot_geocoded`

    }
  }

  state = {
    muni_query:`SELECT muni,ccaa,isla,prov,nivel_actual,nivel_optimo,pobmuni,numservicios,asegsaludmuni,asegsaludcolmuni,asegsaludindmuni,clientesnosaludmuni,propsaludmuni,capital,cod_muni,numservicios_a_t_s_enfermeria,numservicios_alergologia,numservicios_anatomia_patologica,numservicios_angiologia_y_cirugia_vascular,numservicios_angiologia_pruebas_diagnosticas,numservicios_analisis_clinicos,numservicios_aparato_digestivo,numservicios_aparato_digestivo_endoscopias,numservicios_cardiologia,numservicios_cardiologia_hemodinamia,numservicios_cardiologia_pruebas_diagnosticas,numservicios_chequeos_medicos,numservicios_cirugia_cardiovascular,numservicios_cirugia_general_y_digestiva,numservicios_cirugia_maxilofacial,numservicios_cirugia_pediatrica,numservicios_cirugia_plastica_y_reparadora,numservicios_cirugia_refractiva_laser,numservicios_cirugia_toracica,numservicios_densitometria_osea,numservicios_dermatologia,numservicios_endocrinologia,numservicios_fisioterapia,numservicios_ginecologia_y_obstetricia,numservicios_hematologia_y_hemoterapia,numservicios_hospitalizacion,numservicios_hospitalizacion_psiquiatrica,numservicios_inmunologia,numservicios_litotricia_renal,numservicios_logopedia_y_logofoniatria,numservicios_medicina_deportiva,numservicios_medicina_general,numservicios_medicina_intensiva,numservicios_medicina_interna,numservicios_medicina_nuclear,numservicios_nefrologia,numservicios_neumologia,numservicios_neurocirugia,numservicios_neurofisiologia_clinica,numservicios_neurologia,numservicios_oftalmologia,numservicios_oncologia_medica,numservicios_oncologia_radioterapica,numservicios_otorrinolaringologia,numservicios_pediatria,numservicios_podologia,numservicios_preparacion_al_parto,numservicios_psiquiatria,numservicios_puericultura,numservicios_radiologia_convencional,numservicios_radiologia_intervencionista,numservicios_radiologia_ecografia,numservicios_radiologia_mamografia,numservicios_rehabilitacion,numservicios_reproduccion_asistida,numservicios_resonancia_magnetica_r_m_n,numservicios_reumatologia,numservicios_t_a_c_escaner,numservicios_tratamiento_del_dolor,numservicios_traumatologia_y_cir_ortopedica,numservicios_urgencias_ambulatorias,numservicios_urgencias_cardiovasculares,numservicios_urgencias_ginecologicas_y_obstetricas,numservicios_urgencias_medico_quirurgicas,numservicios_urgencias_oftalmologicas,numservicios_urgencias_otorrinolaringologicas,numservicios_urgencias_pediatricas,numservicios_urgencias_psiquiatricas,numservicios_urgencias_traumatologicas,numservicios_urologia,perfil_a_t_s_enfermeria,perfil_alergologia,perfil_anatomia_patologica,perfil_angiologia_y_cirugia_vascular,perfil_angiologia_pruebas_diagnosticas,perfil_analisis_clinicos,perfil_aparato_digestivo,perfil_aparato_digestivo_endoscopias,perfil_cardiologia,perfil_cardiologia_hemodinamia,perfil_cardiologia_pruebas_diagnosticas,perfil_chequeos_medicos,perfil_cirugia_cardiovascular,perfil_cirugia_general_y_digestiva,perfil_cirugia_maxilofacial,perfil_cirugia_pediatrica,perfil_cirugia_plastica_y_reparadora,perfil_cirugia_refractiva_laser,perfil_cirugia_toracica,perfil_densitometria_osea,perfil_dermatologia,perfil_endocrinologia,perfil_fisioterapia,perfil_ginecologia_y_obstetricia,perfil_hematologia_y_hemoterapia,perfil_hospitalizacion,perfil_hospitalizacion_psiquiatrica,perfil_inmunologia,perfil_litotricia_renal,perfil_logopedia_y_logofoniatria,perfil_medicina_deportiva,perfil_medicina_general,perfil_medicina_intensiva,perfil_medicina_interna,perfil_medicina_nuclear,perfil_nefrologia,perfil_neumologia,perfil_neurocirugia,perfil_neurofisiologia_clinica,perfil_neurologia,perfil_oftalmologia,perfil_oncologia_medica,perfil_oncologia_radioterapica,perfil_otorrinolaringologia,perfil_pediatria,perfil_podologia,perfil_preparacion_al_parto,perfil_psiquiatria,perfil_puericultura,perfil_radiologia_convencional,perfil_radiologia_intervencionista,perfil_radiologia_ecografia,perfil_radiologia_mamografia,perfil_rehabilitacion,perfil_reproduccion_asistida,perfil_resonancia_magnetica_r_m_n,perfil_reumatologia,perfil_t_a_c_escaner,perfil_tratamiento_del_dolor,perfil_traumatologia_y_cir_ortopedica,perfil_urgencias_ambulatorias,perfil_urgencias_cardiovasculares,perfil_urgencias_ginecologicas_y_obstetricas,perfil_urgencias_medico_quirurgicas,perfil_urgencias_oftalmologicas,perfil_urgencias_otorrinolaringologicas,perfil_urgencias_pediatricas,perfil_urgencias_psiquiatricas,perfil_urgencias_traumatologicas,perfil_urologia FROM allinfomuni where asegsaludmuni > 0`,
    proveedor_query:`SELECT nombre_del_centro,codigo_pas,centro_pas, dir_centro,telefono FROM proveedores_toplot_geocoded`
  }

  componentDidMount(){
    this.setState({muni_query: `SELECT muni,ccaa,isla,prov,nivel_actual,nivel_optimo,pobmuni,numservicios,asegsaludmuni,asegsaludcolmuni,asegsaludindmuni,clientesnosaludmuni,propsaludmuni,capital,cod_muni,numservicios_a_t_s_enfermeria,numservicios_alergologia,numservicios_anatomia_patologica,numservicios_angiologia_y_cirugia_vascular,numservicios_angiologia_pruebas_diagnosticas,numservicios_analisis_clinicos,numservicios_aparato_digestivo,numservicios_aparato_digestivo_endoscopias,numservicios_cardiologia,numservicios_cardiologia_hemodinamia,numservicios_cardiologia_pruebas_diagnosticas,numservicios_chequeos_medicos,numservicios_cirugia_cardiovascular,numservicios_cirugia_general_y_digestiva,numservicios_cirugia_maxilofacial,numservicios_cirugia_pediatrica,numservicios_cirugia_plastica_y_reparadora,numservicios_cirugia_refractiva_laser,numservicios_cirugia_toracica,numservicios_densitometria_osea,numservicios_dermatologia,numservicios_endocrinologia,numservicios_fisioterapia,numservicios_ginecologia_y_obstetricia,numservicios_hematologia_y_hemoterapia,numservicios_hospitalizacion,numservicios_hospitalizacion_psiquiatrica,numservicios_inmunologia,numservicios_litotricia_renal,numservicios_logopedia_y_logofoniatria,numservicios_medicina_deportiva,numservicios_medicina_general,numservicios_medicina_intensiva,numservicios_medicina_interna,numservicios_medicina_nuclear,numservicios_nefrologia,numservicios_neumologia,numservicios_neurocirugia,numservicios_neurofisiologia_clinica,numservicios_neurologia,numservicios_oftalmologia,numservicios_oncologia_medica,numservicios_oncologia_radioterapica,numservicios_otorrinolaringologia,numservicios_pediatria,numservicios_podologia,numservicios_preparacion_al_parto,numservicios_psiquiatria,numservicios_puericultura,numservicios_radiologia_convencional,numservicios_radiologia_intervencionista,numservicios_radiologia_ecografia,numservicios_radiologia_mamografia,numservicios_rehabilitacion,numservicios_reproduccion_asistida,numservicios_resonancia_magnetica_r_m_n,numservicios_reumatologia,numservicios_t_a_c_escaner,numservicios_tratamiento_del_dolor,numservicios_traumatologia_y_cir_ortopedica,numservicios_urgencias_ambulatorias,numservicios_urgencias_cardiovasculares,numservicios_urgencias_ginecologicas_y_obstetricas,numservicios_urgencias_medico_quirurgicas,numservicios_urgencias_oftalmologicas,numservicios_urgencias_otorrinolaringologicas,numservicios_urgencias_pediatricas,numservicios_urgencias_psiquiatricas,numservicios_urgencias_traumatologicas,numservicios_urologia,perfil_a_t_s_enfermeria,perfil_alergologia,perfil_anatomia_patologica,perfil_angiologia_y_cirugia_vascular,perfil_angiologia_pruebas_diagnosticas,perfil_analisis_clinicos,perfil_aparato_digestivo,perfil_aparato_digestivo_endoscopias,perfil_cardiologia,perfil_cardiologia_hemodinamia,perfil_cardiologia_pruebas_diagnosticas,perfil_chequeos_medicos,perfil_cirugia_cardiovascular,perfil_cirugia_general_y_digestiva,perfil_cirugia_maxilofacial,perfil_cirugia_pediatrica,perfil_cirugia_plastica_y_reparadora,perfil_cirugia_refractiva_laser,perfil_cirugia_toracica,perfil_densitometria_osea,perfil_dermatologia,perfil_endocrinologia,perfil_fisioterapia,perfil_ginecologia_y_obstetricia,perfil_hematologia_y_hemoterapia,perfil_hospitalizacion,perfil_hospitalizacion_psiquiatrica,perfil_inmunologia,perfil_litotricia_renal,perfil_logopedia_y_logofoniatria,perfil_medicina_deportiva,perfil_medicina_general,perfil_medicina_intensiva,perfil_medicina_interna,perfil_medicina_nuclear,perfil_nefrologia,perfil_neumologia,perfil_neurocirugia,perfil_neurofisiologia_clinica,perfil_neurologia,perfil_oftalmologia,perfil_oncologia_medica,perfil_oncologia_radioterapica,perfil_otorrinolaringologia,perfil_pediatria,perfil_podologia,perfil_preparacion_al_parto,perfil_psiquiatria,perfil_puericultura,perfil_radiologia_convencional,perfil_radiologia_intervencionista,perfil_radiologia_ecografia,perfil_radiologia_mamografia,perfil_rehabilitacion,perfil_reproduccion_asistida,perfil_resonancia_magnetica_r_m_n,perfil_reumatologia,perfil_t_a_c_escaner,perfil_tratamiento_del_dolor,perfil_traumatologia_y_cir_ortopedica,perfil_urgencias_ambulatorias,perfil_urgencias_cardiovasculares,perfil_urgencias_ginecologicas_y_obstetricas,perfil_urgencias_medico_quirurgicas,perfil_urgencias_oftalmologicas,perfil_urgencias_otorrinolaringologicas,perfil_urgencias_pediatricas,perfil_urgencias_psiquiatricas,perfil_urgencias_traumatologicas,perfil_urologia FROM allinfomuni where asegsaludmuni > 0`})
    this.setState({proveedor_query: `SELECT nombre_del_centro,codigo_pas,centro_pas, dir_centro,telefono FROM proveedores_toplot_geocoded`})
  }

  componentDidUpdate(prevProps){
    console.log(prevProps)
    console.log("UPDATEEEEEEEEE")
  }

  
  
  render() {
    const {muni_query,proveedor_query} = this.state
    return (
      <footer className={`as-map-footer`} data-name={this.props.name}>
        <div className="as-box as-box--scroll">
        
        <as-tabs>
        <div role="tabpanel" data-title="Municipios">
        {/* <br/> */}
            {/* <Export 
              query={this.props.layers.municipios.query}
              useMapBounds={true}
              layer={this.props.layers.municipios.source}
              format='csv'
              filename='Municipios'
              name='Exportar Información de Muncipios'
            /> */}
            <br/>
            <Table 
              query={this.props.layers.municipios.query}
              useMapBounds={true}
              useLimit={25}
              headers={['Municipio','CCAA','ISLA','Provincia','N.ACT.','N.OPT.','Habitantes','Total Servicios','asegsaludmuni','asegsaludcolmuni','asegsaludindmuni','clientesnosaludmuni','propsaludmuni','capital','cod_muni','numservicios_a_t_s_enfermeria','numservicios_alergologia','numservicios_anatomia_patologica','numservicios_angiologia_y_cirugia_vascular','numservicios_angiologia_pruebas_diagnosticas','numservicios_analisis_clinicos','numservicios_aparato_digestivo','numservicios_aparato_digestivo_endoscopias','numservicios_cardiologia','numservicios_cardiologia_hemodinamia','numservicios_cardiologia_pruebas_diagnosticas','numservicios_chequeos_medicos','numservicios_cirugia_cardiovascular','numservicios_cirugia_general_y_digestiva','numservicios_cirugia_maxilofacial','numservicios_cirugia_pediatrica','numservicios_cirugia_plastica_y_reparadora','numservicios_cirugia_refractiva_laser','numservicios_cirugia_toracica','numservicios_densitometria_osea','numservicios_dermatologia','numservicios_endocrinologia','numservicios_fisioterapia','numservicios_ginecologia_y_obstetricia','numservicios_hematologia_y_hemoterapia','numservicios_hospitalizacion','numservicios_hospitalizacion_psiquiatrica','numservicios_inmunologia','numservicios_litotricia_renal','numservicios_logopedia_y_logofoniatria','numservicios_medicina_deportiva','numservicios_medicina_general','numservicios_medicina_intensiva','numservicios_medicina_interna','numservicios_medicina_nuclear','numservicios_nefrologia','numservicios_neumologia','numservicios_neurocirugia','numservicios_neurofisiologia_clinica','numservicios_neurologia','numservicios_oftalmologia','numservicios_oncologia_medica','numservicios_oncologia_radioterapica','numservicios_otorrinolaringologia','numservicios_pediatria','numservicios_podologia','numservicios_preparacion_al_parto','numservicios_psiquiatria','numservicios_puericultura','numservicios_radiologia_convencional','numservicios_radiologia_intervencionista','numservicios_radiologia_ecografia','numservicios_radiologia_mamografia','numservicios_rehabilitacion','numservicios_reproduccion_asistida','numservicios_resonancia_magnetica_r_m_n','numservicios_reumatologia','numservicios_t_a_c_escaner','numservicios_tratamiento_del_dolor','numservicios_traumatologia_y_cir_ortopedica','numservicios_urgencias_ambulatorias','numservicios_urgencias_cardiovasculares','numservicios_urgencias_ginecologicas_y_obstetricas','numservicios_urgencias_medico_quirurgicas','numservicios_urgencias_oftalmologicas','numservicios_urgencias_otorrinolaringologicas','numservicios_urgencias_pediatricas','numservicios_urgencias_psiquiatricas','numservicios_urgencias_traumatologicas','numservicios_urologia','perfil_a_t_s_enfermeria','perfil_alergologia','perfil_anatomia_patologica','perfil_angiologia_y_cirugia_vascular','perfil_angiologia_pruebas_diagnosticas','perfil_analisis_clinicos','perfil_aparato_digestivo','perfil_aparato_digestivo_endoscopias','perfil_cardiologia','perfil_cardiologia_hemodinamia','perfil_cardiologia_pruebas_diagnosticas','perfil_chequeos_medicos','perfil_cirugia_cardiovascular','perfil_cirugia_general_y_digestiva','perfil_cirugia_maxilofacial','perfil_cirugia_pediatrica','perfil_cirugia_plastica_y_reparadora','perfil_cirugia_refractiva_laser','perfil_cirugia_toracica','perfil_densitometria_osea','perfil_dermatologia','perfil_endocrinologia','perfil_fisioterapia','perfil_ginecologia_y_obstetricia','perfil_hematologia_y_hemoterapia','perfil_hospitalizacion','perfil_hospitalizacion_psiquiatrica','perfil_inmunologia','perfil_litotricia_renal','perfil_logopedia_y_logofoniatria','perfil_medicina_deportiva','perfil_medicina_general','perfil_medicina_intensiva','perfil_medicina_interna','perfil_medicina_nuclear','perfil_nefrologia','perfil_neumologia','perfil_neurocirugia','perfil_neurofisiologia_clinica','perfil_neurologia','perfil_oftalmologia','perfil_oncologia_medica','perfil_oncologia_radioterapica','perfil_otorrinolaringologia','perfil_pediatria','perfil_podologia','perfil_preparacion_al_parto','perfil_psiquiatria','perfil_puericultura','perfil_radiologia_convencional','perfil_radiologia_intervencionista','perfil_radiologia_ecografia','perfil_radiologia_mamografia','perfil_rehabilitacion','perfil_reproduccion_asistida','perfil_resonancia_magnetica_r_m_n','perfil_reumatologia','perfil_t_a_c_escaner','perfil_tratamiento_del_dolor','perfil_traumatologia_y_cir_ortopedica','perfil_urgencias_ambulatorias','perfil_urgencias_cardiovasculares','perfil_urgencias_ginecologicas_y_obstetricas','perfil_urgencias_medico_quirurgicas','perfil_urgencias_oftalmologicas','perfil_urgencias_otorrinolaringologicas','perfil_urgencias_pediatricas','perfil_urgencias_psiquiatricas','perfil_urgencias_traumatologicas','perfil_urologia']}
              where={true}
          />
        </div>
        <div role="tabpanel" data-title="Centros">
            {/* <br/> */}
            {/* <Export 
              query={this.props.layers.proveedores.query}
              layer={this.props.layers.proveedores.source}
              format='csv'
              filename='Proveedores'
              name='Exportar Información de Centros'
            /> */}
            <br/>
            <Table 
              query={this.props.layers.proveedores.query}
              useMapBounds={true}
              useLimit={25}
              headers={['Centro','Codigo PAS','Centro PAS','Dirección', 'Teléfono' ]}
              where={false}
            />
        </div>
        </as-tabs>
        </div>
          
      </footer>
    )
  }

}


const mapStateToProps = state => ({
  client: state.client,
  map: state.map,
  layers: state.layers,
  viewport: state.viewport,
  boundingbox: state.boundingbox
});

export default connect(mapStateToProps)(BottomBar);