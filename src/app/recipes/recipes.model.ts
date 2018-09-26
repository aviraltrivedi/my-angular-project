export class Recipe{
	public name: string;
	public description: string;
	public imagePath: string;

	constructor(name: string, descripiton: string, imagePath: string){
		this.name = name;
		this.description = descripiton;
		this.imagePath = imagePath;
	}
}