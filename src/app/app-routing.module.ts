import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'nuevo-horario', loadChildren: './pages/nuevo-horario/nuevo-horario.module#NuevoHorarioPageModule' },
  { path: 'nuevo-examen', loadChildren: './pages/nuevo-examen/nuevo-examen.module#NuevoExamenPageModule' },
  { path: 'sliede', loadChildren: './pages/sliede/sliede.module#SliedePageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
