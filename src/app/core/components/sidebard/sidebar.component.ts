import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  sidebarForm: FormGroup = new FormGroup({});

  allAutocompleteOptions: string[] = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
  ];
  autocompleteOptions: string[] = [];
  dropdownOptions = [
    { name: 'Opción A', value: 'A' },
    { name: 'Opción B', value: 'B' },
    { name: 'Opción C', value: 'C' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.sidebarForm = this.fb.group({
      autocomplete: [null],
      dropdown: [null],
    });
  }

  filterAutocomplete(event: any) {
    const query = event.query;
    this.autocompleteOptions = this.allAutocompleteOptions.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase())
    );
  }
}
