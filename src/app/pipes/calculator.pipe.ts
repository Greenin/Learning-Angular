import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'calculator'
})
export class CalculatorPipe implements PipeTransform{
	
	//data | calculator: otherData
	//param1			 param2
	transform(oValue: any, oValue_two: any){
		let operations = `
			Addition:	${oValue+oValue_two} -
			Subtraction: ${oValue-oValue_two} -
			Multiplication: ${oValue*oValue_two} -
			Division: ${oValue/oValue_two}
		`;

		return operations;
	}
}