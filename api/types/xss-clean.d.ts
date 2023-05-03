/* declare module "xss-clean" {
	const value: Function;

	export default value;
} */

declare module "xss-clean" {
	function xssClean(): (
		req: import("express").Request,
		res: import("express").Response,
		next: import("express").NextFunction
	) => void;

	namespace xssClean {}
	export = xssClean;
}
